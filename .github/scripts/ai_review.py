#!/usr/bin/env python3
"""
AI PR Code Review using GitHub Models (GPT-4o)
Usage: python ai_review.py < pr.diff > review.json
"""

import os
import sys
import json
from openai import OpenAI

token = os.environ.get("GPT_TOKEN")
if not token:
    print(json.dumps({
        "approved": False,
        "summary": "GPT_TOKEN secret 未設定，無法執行 AI 審查。",
        "issues": ["請在 Repository Secrets 中設定 GPT_TOKEN"]
    }, ensure_ascii=False))
    sys.exit(0)

client = OpenAI(
    base_url="https://models.inference.ai.azure.com",
    api_key=token,
)

diff = sys.stdin.read().strip()
pr_title = os.environ.get("PR_TITLE", "")
pr_body = os.environ.get("PR_BODY", "")

# Truncate diff if too long (GPT-4o context limit consideration)
MAX_DIFF_CHARS = 28000
if len(diff) > MAX_DIFF_CHARS:
    diff = diff[:MAX_DIFF_CHARS] + "\n\n[... diff 已截斷，超過長度限制 ...]"

if not diff:
    result = {
        "approved": True,
        "summary": "此 PR 沒有程式碼變更",
        "issues": []
    }
    print(json.dumps(result, ensure_ascii=False))
    sys.exit(0)

prompt = f"""你是一個專業的程式碼審查員。請審查以下 Pull Request 的程式碼變更。

PR 標題: {pr_title}
PR 描述: {pr_body or '（無描述）'}

程式碼差異 (diff):
```
{diff}
```

請以下列 JSON 格式回覆（只回覆純 JSON，不要 markdown 或其他文字）:
{{
  "approved": true 或 false,
  "summary": "簡短審查摘要（繁體中文，1~3 句）",
  "issues": ["嚴重問題1", "嚴重問題2"]
}}

審查標準:
- 只有存在以下情況才拒絕 (approved: false): 明顯 bug、安全漏洞（XSS/SQL injection 等）、機密資訊洩漏、嚴重邏輯錯誤
- 程式碼風格、命名、效能優化建議不影響 approved 決定
- issues 陣列只列嚴重到必須修正的問題，一般建議請放在 summary
- 若無嚴重問題，issues 為空陣列
"""

response = client.chat.completions.create(
    messages=[
        {
            "role": "system",
            "content": "你是一個嚴謹但務實的程式碼審查員。只拒絕有明確嚴重問題的 PR，一般性改善建議不作為拒絕理由。"
        },
        {"role": "user", "content": prompt}
    ],
    model="gpt-4o",
    temperature=0.2,
    max_tokens=800,
)

content = response.choices[0].message.content.strip()

# Strip markdown code blocks if present
if "```json" in content:
    content = content.split("```json")[1].split("```")[0].strip()
elif "```" in content:
    content = content.split("```")[1].split("```")[0].strip()

try:
    result = json.loads(content)
    result.setdefault("approved", False)
    result.setdefault("summary", "無法解析審查摘要")
    result.setdefault("issues", [])
except json.JSONDecodeError:
    result = {
        "approved": False,
        "summary": f"AI 回應格式異常，無法解析。原始回應: {content[:300]}",
        "issues": ["無法解析 AI 審查結果，請手動審查"]
    }

print(json.dumps(result, ensure_ascii=False))
