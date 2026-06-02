# LeetCode Solutions in TypeScript 🧠

Welcome to my personal collection of LeetCode problem solutions written in **TypeScript**.

## 📌 Purpose

This repository serves as:
- A daily practice log for improving problem-solving skills.
- A source of TypeScript-based solutions for common coding interview problems.
- A personal reference for revisiting tricky problems or optimized approaches.


---

### Find Solved Questions Without Java

```bash
ids=$(for id in $(find . -maxdepth 1 -type f ! -name "*.java" | sed 's|^\./||' | cut -d. -f1 | sort -nu); do compgen -G "$id.*.java" >/dev/null || printf "%s " "$id"; done); echo "$ids {$(( $(wc -w <<< "$ids") ))}"
```