---
slug: claude-code-
title: "Claude Code 由淺入深"
authors: [Nathan]
date: 2026-02-17
image: https://github.com/user-attachments/assets/77580a9d-ba32-480c-a3a7-6d2332c592cf
tags:
  - claude_code
---

<img width="1024" height="572" alt="Image" src="https://github.com/user-attachments/assets/77580a9d-ba32-480c-a3a7-6d2332c592cf" />

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
