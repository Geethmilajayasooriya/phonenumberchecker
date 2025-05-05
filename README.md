# 📞 Phone Number Checker – Sri Lanka Format

A simple JavaScript-based utility to **validate and convert Sri Lankan phone numbers** into international format (`94XXXXXXXXX`). Ideal for form validation and basic input checking.

## ✨ Features

- Accepts input in common Sri Lankan formats:
  - `07XXXXXXXX` (with or without leading 0)
  - `712345678` (9 digits)
  - `94712345678` (international format)
- Converts valid numbers to international format (`94XXXXXXXXX`)
- Handles leap years and real-time feedback via DOM manipulation
- Displays error messages for invalid input lengths or formats

## 🧠 Validation Logic

- ✅ **9-digit** numbers (e.g., `712345678`) → converted to `94712345678`
- ✅ **10-digit** numbers (e.g., `0712345678`) → `94712345678`
- ✅ **11-digit** numbers that start with `94` → kept as `94712345678`
- ❌ Any number that doesn't fit the above rules → `invalid..check the number`

## 🖼️ Example Outputs

| Input        | Output / Message             |
|--------------|------------------------------|
| `712345678`  | `94712345678`                |
| `0712345678` | `94712345678`                |
| `94712345678`| `94712345678`                |
| `81234`      | `invalid..check the number`  |
| `9612345678` | `invalid..check the number`  |

## 🚀 How to Run

1. Clone the repository  
   ```bash
   git clone https://github.com/Geethmilajayasooriya/phonenumberchecker.git
