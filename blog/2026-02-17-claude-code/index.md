---
slug: claude-code
title: "Claude Code 由淺入深"
authors: [Nathan]
date: 2026-02-17
image: ./cover.png
tags:
  - claude_code
---

<img width="1024" height="572" alt="Image" src="./cover.png" />

# 工程師的 Claude Code 實戰指南：從零開始到高效開發

> 本文整合 [Anthropic 官方 Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices) 與社群實戰 Tips，帶你由淺入深掌握 Claude Code。

---

## 什麼是 Claude Code？為什麼值得學？

如果你還在用「複製程式碼貼到 ChatGPT，再複製答案貼回去」的工作流程，Claude Code 會讓你大開眼界。

Claude Code 是 Anthropic 推出的命令列工具，它直接活在你的 terminal 裡，能夠讀懂你的整個 codebase、寫入檔案、執行指令、操作 git，甚至幫你開 PR。它不只是個「提示框」，而是一個能主動採取行動的 AI 代理（agentic coding assistant）。

用一句話形容：**你告訴它要做什麼，它去搞定**。

很多從 Cursor、GitHub Copilot 轉過來的工程師都說，用過 Claude Code 之後回不去了。原因不是它比較聰明，而是它的工作方式根本不同——它在你的環境裡工作，而不是你把東西帶去它的環境。

---

## 第一步：安裝與基本啟動

安裝 Claude Code 只需要一行：

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

安裝後，進入你的專案目錄，直接輸入 `claude` 就能啟動。

### 四種啟動模式

| 指令 | 情境 |
|---|---|
| `claude` | 標準啟動，開始全新對話（互動式） |
| `claude -c` | 快速接回最近一次的對話 |
| `claude -r` | 顯示歷史對話列表，含摘要，選擇要接回哪一個 |
| `claude -p "..."` | Headless Mode，非互動式，單次執行，用於自動化 |

建議新手先從 `claude` 開始，熟悉基本操作後，`-c` 和 `-r` 會成為你每天的好朋友。

### Headless Mode（`claude -p`）

`claude -p` 是 Claude Code 從「個人工具」升級到「團隊基礎設施」的關鍵能力：

- 非互動式，執行完就結束，不進入對話模式
- 適合用在 CI/CD、git hooks、自動化腳本
- 可搭配 `--output-format stream-json` 輸出結構化 JSON，方便下游程式處理
- 可搭配 `--allowedTools` 限制可用工具範圍

```bash
# 最簡單的用法
claude -p "review 這個 PR 的安全性問題"

# pipe 資料進去
cat error.log | claude -p "分析這些錯誤，找出最常見的根因"

# 輸出 JSON 給下游處理
claude -p "列出所有 deprecated 的 API 呼叫" --output-format stream-json | your_script.py

# 限制工具範圍（更安全）
claude -p "把 foo.py 從 React 改成 Vue" --allowedTools Edit "Bash(git commit:*)"
```

---

## 第二步：學會在對話中操作

進入 Claude Code 後，它看起來像個聊天介面，但有一些特殊符號和快捷鍵讓你的效率倍增。

### 三個超有用的符號

**`@` 指定檔案**：輸入 `@` 後會顯示檔案列表，支援模糊搜尋，讓你精確告訴 Claude 要操作哪個檔案，不用擔心它讀錯地方。

**`!` 直接執行 shell 指令**：有時你只是想快速執行一個指令，不需要 AI 處理，直接用 `!` 前綴就能執行 shell 命令。例如 `!git status` 或 `!ls -la`。

**`#` 加入記憶**：當你輸入 `#` 開頭的訊息，系統會詢問你要存入哪個 CLAUDE.md，讓 Claude 長期記住這段背景知識。例如「# 我們的 API 版本是 v2，請不要使用 v1 的 endpoint」，之後的每次對話它都會記得。

### 不可不知的快捷鍵

- **`ESC`** — 中斷當前任務。Claude 正在瘋狂編輯檔案但方向不對？按 ESC 立刻停下，不會破壞 session，可以重新下指令
- **`ESC ESC`（按兩次）** — 顯示過去發送的訊息列表，讓你選擇一個重新發送，類似「開分支」的概念，從不同的起點探索
- **`Shift+TAB`** — 切換工作模式

### 三種工作模式

使用 `Shift+TAB` 可以在三種模式間切換：

**自動接受模式（auto-accept edits）**：Claude 提議的修改自動核准，適合信任度高、不想每次都確認的場景。速度最快。

**規劃模式（plan mode）**：Claude 只做分析和規劃，不會實際動檔案。在開始寫程式之前，先用這個模式讓它產出設計方案給你審核，是架構討論的好幫手。

**危險模式（`--dangerously-skip-permissions`）**：跳過所有權限確認，讓 Claude 全速工作。官方文件特別強調這個模式要在有限制的 Docker container 裡使用，不建議在本機直接用。

---

## 第三步：設定你的專案大腦 — CLAUDE.md

`CLAUDE.md` 是整個 Claude Code 生態系中最重要的概念。**這個檔案是 Claude 每次啟動對話時必讀的說明書**，放對內容，效果立竿見影。

第一次使用時，執行 `/init` 指令，Claude 會自動分析你的 codebase 結構並產生一份基礎的 CLAUDE.md，再手動精修即可。

### 放什麼在 CLAUDE.md？

- 常用的 bash 指令（`npm run build`、`npm run test` 等）
- 核心檔案與工具函式的位置說明
- 程式碼風格規範（例如：使用 ES modules 而非 CommonJS）
- 測試方式與規則
- Git 工作流程規範（例如：branch 命名方式、merge vs. rebase）
- 開發環境特殊設定
- 任何你希望 Claude 永遠記住的事項

```markdown
# 常用指令
- npm run build: 建置專案
- npm run test: 執行測試
- npm run typecheck: 型別檢查

# 程式碼風格
- 使用 ES modules (import/export)，不用 CommonJS (require)
- 盡量用解構語法引入 (import { foo } from 'bar')
- 所有 API 呼叫都走 /src/api/ 資料夾的封裝

# 工作流程
- 每次改完記得跑 typecheck
- 測試優先，盡量跑單一測試而非全套
- branch 命名格式：feature/xxx 或 fix/xxx
```

### CLAUDE.md 的四個層級

根據官方文件，CLAUDE.md 其實有四個層級，由高到低依序套用：

| 層級 | 位置 | 用途 | 誰能看到 |
|---|---|---|---|
| **Enterprise policy** | macOS: `/Library/Application Support/ClaudeCode/CLAUDE.md` | 公司統一規範，由 IT/DevOps 部署 | 組織內所有使用者 |
| **Project memory** | `./CLAUDE.md` 或 `./.claude/CLAUDE.md` | 專案共用規範 | 團隊（透過 git） |
| **User memory** | `~/.claude/CLAUDE.md` | 個人全域偏好 | 只有你（所有專案） |
| **Project memory (local)** | `./CLAUDE.local.md` | 個人專案設定 | 只有你（當前專案） |

> `CLAUDE.local.md` 會自動加入 `.gitignore`，適合放沙箱 URL、個人測試資料等不應上傳的設定。

### `@import` 語法

CLAUDE.md 支援用 `@` 語法引入其他檔案，最多支援 5 層巢狀：

```markdown
# 引入其他說明文件
請參考 @README 了解專案概覽，@package.json 查看可用指令。

# Git 工作流程
@docs/git-instructions.md

# 個人偏好（引入自 home 目錄，不會進 git）
@~/.claude/my-project-instructions.md
```

這讓 CLAUDE.md 保持簡潔，把細節拆到獨立文件裡分開維護。

### Monorepo 建議結構

CLAUDE.md 支援**多層級繼承**，Claude 會自動把沿途讀到的所有 CLAUDE.md 合併進 context，這對 monorepo 非常適合：

```
root/
├── CLAUDE.md                ← 全專案共用：monorepo 工具（nx/turborepo）、CI 指令、跨 package 規範
│                               可用 @import 引入各 package 文件
├── docs/
│   └── git-instructions.md  ← 被 @import 引用的獨立說明
├── packages/
│   ├── frontend/
│   │   └── CLAUDE.md        ← 前端專用：React 規範、CSS-in-JS、UI 元件慣例
│   ├── backend/
│   │   └── CLAUDE.md        ← 後端專用：API 設計規範、DB migration 指令
│   └── shared/
│       └── CLAUDE.md        ← shared lib 專用：型別規範、不能有 side effect 等限制
└── CLAUDE.local.md          ← 個人設定，自動加入 .gitignore
```

**分層邏輯：**

- **根目錄** 放「任何 package 都適用」的內容，例如 `pnpm install`、branch 命名規則、PR 流程
- **各 package** 只放「這個 package 才有意義」的差異化內容

當你在 `packages/frontend/` 啟動 `claude`，它會同時讀到根目錄與 `packages/frontend/` 的 CLAUDE.md，不需要在每個 package 重複寫共用規範。

> 小技巧：根目錄的 CLAUDE.md 加一行職責邊界說明，例如「`packages/shared` 只能被其他 package 引用，不能引用 frontend 或 backend 的程式碼」，跨 package 重構時 Claude 就不會犯錯。

### 其他管理記憶的方式

- **`#` 快速新增**：輸入 `# 內容`，系統會詢問要存入哪個 CLAUDE.md
- **`/memory` 指令**：在對話中執行，會用系統編輯器開啟記憶檔案，適合一次做大量整理

---

## 第四步：上下文管理 — 最關鍵的資源

很多人用 Claude Code 用著用著開始感覺它「變笨了」，原因幾乎都是一樣的：**context window 滿了**。

Claude 的整個對話歷史、讀過的每個檔案、執行過的每個指令輸出，全都塞在 context window 裡。一個複雜的除錯過程，可能幾萬個 token 就燒掉了。當 context 快滿，Claude 開始「遺忘」早期的指令，犯更多錯誤。

### 兩個關鍵指令

**`/clear`**：清除所有當前對話的 context，重新開始。開始一個全新任務之前，養成習慣打 `/clear`，讓它帶著清爽的頭腦工作。

**`/compact`**：壓縮 context，可以附上提示說明要保留哪些重點。注意，壓縮後有可能遺失部分細節、導致後續表現變差，更建議的做法是直接開新的 session。

官方建議：**在長對話工作後、切換到新任務前，定期使用 `/clear`**。有些工程師甚至把「每次開始新任務就 /clear」當成強制習慣。

---

## 第五步：善用 Think 模式深度推理

Claude Code 支援幾個特殊關鍵字，讓它進入不同深度的思考模式：

| 層級 | 關鍵字 |
|---|---|
| 基礎 | `think` |
| 中等 | `think more` / `think hard` |
| 深入 | `think longer` / `think harder` |
| 最大 | `ultrathink` |

使用方式很直覺，直接在 prompt 裡說「請 think hard，設計這個資料庫 schema」或「ultrathink，分析這個 bug 的根本原因」即可。

**重要提醒**：更深的思考消耗更多 token，建議根據問題複雜度選擇。簡單任務用 `think` 就夠，複雜架構設計或難以追蹤的 bug 才用 `ultrathink`。

中文指令「想一想」、「深度思考」也可以被識別，但優先用英文以確保穩定性。

---

## 第六步：掌握高效工作流

有了基礎工具知識後，來看幾個 Anthropic 官方推薦的實戰工作流。

### 工作流一：探索 → 規劃 → 實作 → Commit

這是最通用的工作流，適合大多數功能開發場景：

1. **探索**：告訴 Claude 讀相關的檔案、圖表或 URL，但**明確說「還不要寫程式」**。這個階段讓它建立完整的 context。
2. **規劃**：請 Claude 制定實作計畫（可以用 `think hard` 讓它想得更仔細）。計畫確認後，請它寫成 Markdown 文件或 GitHub issue 存檔。
3. **實作**：拿著確認好的計畫，請它動手寫程式。
4. **Commit**：請 Claude 寫 commit message 並 commit，需要的話也可以請它開 PR。

前兩步是關鍵。很多工程師跳過規劃直接叫它寫，結果方向跑偏，浪費更多時間。

### 工作流二：TDD 測試驅動開發

這是 Anthropic 內部最愛的工作流，AI 時代的 TDD 威力加倍：

1. 請 Claude 根據預期的輸入輸出寫測試，**明確說要做 TDD，不要先做 mock 實作**
2. 請它跑測試，確認測試**確實失敗**
3. 對測試滿意後，請它 commit 測試
4. 請 Claude 寫讓測試通過的實作，**不允許修改測試**，讓它自己跑測試、修改、再跑，直到全部通過
5. 確認後 commit 實作

提供清晰的「完成標準」是讓 Claude 表現最好的方式，而測試就是最好的完成標準。

### 工作流三：截圖視覺迭代（UI 開發最愛）

1. 給 Claude 一個設計稿圖片（拖放或貼上截圖）
2. 請它實作 UI
3. 透過 Puppeteer MCP 讓它截圖比對
4. 請它根據差異迭代修正
5. 滿意後 commit

Claude 在有視覺目標時表現特別好。第一版可能不完美，但給它 2-3 輪迭代後通常相當接近設計稿。

---

## 第七步：進階技巧 — 讓 Claude 更強大

### 擴充工具能力：MCP

MCP（Model Context Protocol）是讓 Claude Code 連接外部服務的標準協議。常用的有：

- **Puppeteer**：讓 Claude 能操控瀏覽器、截圖
- **GitHub MCP**：更深度整合 GitHub 操作
- **資料庫 MCP**：直接查詢你的資料庫

在專案目錄加入 `.mcp.json` 設定檔，整個團隊都能共用這些工具。

### 自訂 Slash 指令

把重複的工作流程做成 slash 指令，存在 `.claude/commands/` 資料夾裡。例如建立 `fix-github-issue.md`：

```markdown
請分析並修復 GitHub issue：$ARGUMENTS

步驟：
1. 用 gh issue view 取得 issue 詳細內容
2. 理解問題描述
3. 搜尋 codebase 找出相關檔案
4. 實作必要的修改
5. 撰寫並執行測試驗證修復
6. 確認通過 lint 和 type check
7. 建立描述性的 commit message
8. Push 並開 PR
```

之後只要輸入 `/project:fix-github-issue 1234` 就能一鍵處理 issue #1234。個人常用指令則存到 `~/.claude/commands/` 讓所有專案都能用。

### 允許清單（Permissions）

用 `/permissions` 指令把常用操作加入允許清單，例如 `Edit`（允許編輯檔案）和 `Bash(git commit:*)`（允許 git commit），不用每次都確認，工作流程更流暢。

---

## 第八步：多 Claude 並行 — 終極生產力

當你熟悉了單 Claude 工作流後，可以嘗試更強大的多 Agent 模式。

### 雙 Claude 互審

用第一個 Claude 寫程式，另開一個 terminal 或用 `/clear` 重置，讓第二個 Claude 審查程式碼。不同的 context 往往能發現不同的問題，效果類似真實的 code review。

### Git Worktrees 平行作業

這是 Anthropic 工程師內部的常用技巧：用 `git worktree add` 建立多個獨立的工作目錄，每個目錄開一個 Claude，同時處理不同任務：

```bash
git worktree add ../project-feature-a feature-a
git worktree add ../project-feature-b feature-b

cd ../project-feature-a && claude  # Claude A 做 feature A
cd ../project-feature-b && claude  # Claude B 做 feature B

# 完成後清理
git worktree remove ../project-feature-a
git worktree remove ../project-feature-b
```

兩個任務互不干擾，你只需要輪流去確認進度和核准操作。

---

## 給新手的建議清單

**操作習慣**
- 每次開始新任務前先 `/clear`，保持 context 乾淨
- 養成用 `ESC` 中斷而非 `Ctrl+C`（後者會直接退出整個程式）
- 用 `@` 精確指定檔案，不要讓它猜
- 重要決策和設定用 `#` 記錄到 CLAUDE.md，或用 `/memory` 做整理

**下指令的原則**
- **具體比模糊好**。「幫我加測試」遠不如「為 foo.py 新增一個測試 case，覆蓋使用者未登入的邊界情況，不要用 mock」
- 先規劃再實作，省下來的時間遠比多打一次指令值得
- 根據問題複雜度選擇 think 層級，不要每次都 ultrathink

**品質把關**
- Claude 寫的程式你負責 review，最終責任在你
- 有測試和 CI 的環境下信任它更多，沒有就要多留意
- 對話越長越要注意 context 品質，適時 `/clear` 比用 `/compact` 更可靠

---

## 結語

Claude Code 的學習曲線不在於功能複雜，而在於思維方式的轉換：從「AI 幫我補全程式碼」轉向「AI 是我的協作工程師，我負責方向，它負責執行」。

一開始可能會覺得要打很多字、要設定很多東西。但一旦你的 CLAUDE.md 建立起來，slash 指令設定好，權限調整完，你會發現整個開發體驗有質的飛躍。

從今天開始，打開 terminal，進入你的專案，輸入 `claude`，然後問它：「你對這個 codebase 有什麼問題嗎？」——你們的旅程就此開始。

---

*參考資料：[Anthropic 官方 Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)、[Anthropic 官方 Memory 文件](https://code.claude.com/docs/en/memory)、[Cash Wu 的 Claude Code Tips](https://blog.cashwu.com/blog/2025/claude-code-tips)*
