# Language Switcher - Testing Instructions

## ✅ What Has Been Implemented

The language switching system is **FULLY FUNCTIONAL** with:
- ✓ English (EN), French (FR), and Russian (RU) translations
- ✓ Complete translation files in `/website/js/translations/`
- ✓ JavaScript i18n engine in `/website/js/main.js`
- ✓ Main page (`index.html`) fully translated with `data-i18n` attributes

## 🚀 How to Test

### Option 1: Using a Local Web Server (REQUIRED)

The translation system uses `fetch()` which requires HTTP protocol. You MUST use a web server:

```bash
# Navigate to the website directory
cd /Users/npolyachenko/Github/Website_sessions/website

# Start Python's built-in HTTP server
python3 -m http.server 8080

# Open in your browser:
open http://localhost:8080
```

### Option 2: Alternative Web Servers

**Node.js (if installed):**
```bash
cd website
npx http-server -p 8080
```

**PHP (if installed):**
```bash
cd website
php -S localhost:8080
```

## 🧪 Testing the Language Switcher

1. **Open** `http://localhost:8080` in your browser
2. **Click** the language buttons in the header: **EN** / **FR** / **RU**
3. **Observe**:
   - All text content changes instantly
   - The clicked button becomes highlighted (active)
   - Nobel Prize quote translates
   - Navigation menu translates
   - All session cards translate
   - All case studies translate
   - About section translates
   - Footer translates

4. **Refresh** the page - the selected language persists (stored in localStorage)

5. **Open browser console** (F12 or Cmd+Option+I) to see detailed logs:
   ```
   === Switching language to: FR ===
   Loading translations from: js/translations/fr.json
   ✓ Loaded fr.json successfully with 8 top-level keys
   Applying translations to 45 elements...
   ✓ Translated 45 elements (0 missing translations)
   ✓ Language successfully switched to: FR
   ```

## ❌ Common Issues

### Issue: "Translations not working when I double-click index.html"

**Cause:** Opening files directly (`file://` protocol) blocks `fetch()` due to browser security (CORS).

**Solution:** Use a local web server as described above.

### Issue: Console shows "Failed to load translations"

**Check:**
1. Web server is running on port 8080
2. You're accessing `http://localhost:8080` (not `file://`)
3. Translation files exist in `/website/js/translations/`

## 📁 File Structure

```
website/
├── index.html                      ← Main page (fully translated)
├── js/
│   ├── main.js                     ← Translation engine
│   └── translations/
│       ├── en.json                 ← English (28KB)
│       ├── fr.json                 ← French (32KB)
│       └── ru.json                 ← Russian (29KB)
├── sessions/
│   └── *.html                      ← Detail pages (translations ready in JSON)
└── cases/
    └── *.html                      ← Detail pages (translations ready in JSON)
```

## 🎯 What's Translated

### ✅ Main Page (index.html) - COMPLETE
- Page title & meta description
- Navigation menu (4 links)
- Nobel Prize quote & attribution
- All 7 session cards (titles + tags)
- "What I Bring" section
- Experience labels (4 items)
- Statistics (4 items)
- All 4 case cards (titles + tags)
- About Me section (3 subsections)
- Certifications (4 types)
- Contact section
- Footer

### 📋 Detail Pages - READY (JSON exists, needs HTML attributes)
- 7 session pages (transformation, team-bonding, strategic, agile, business-games, innovative, others)
- 4 case study pages (agile-transformation, cultural-shift, okr-goal-setting, other-cases)

## 🔧 Technical Details

### How It Works

1. **On page load:**
   - Checks localStorage for saved language (defaults to 'en')
   - Loads corresponding JSON file via `fetch()`
   - Applies translations to all elements with `data-i18n` attributes

2. **On language button click:**
   - Loads new language JSON
   - Updates all translatable elements
   - Saves preference to localStorage
   - Updates active button state

3. **Data attributes:**
   - `data-i18n="nav.sessions"` → looks up `translations.nav.sessions`
   - `data-i18n-attr="aria-label"` → translates HTML attribute instead of text content

### Console Commands for Debugging

Open browser console and try:
```javascript
// Check current language
console.log(currentLanguage);

// Check loaded translations
console.log(currentTranslations);

// Manually switch language
switchLanguage('fr');
switchLanguage('ru');
switchLanguage('en');

// Clear language preference
localStorage.removeItem('preferredLanguage');
```

## ✨ Success Indicators

When working correctly, you should see:
- ✓ Language buttons (EN/FR/RU) in the header
- ✓ Clicking a button instantly translates the page
- ✓ Selected button is highlighted
- ✓ Console shows successful loading messages
- ✓ Language persists after page refresh
- ✓ No JavaScript errors in console

## 📞 Next Steps

To translate the detail pages (sessions/* and cases/*):
1. The JSON translations are already complete
2. Just need to add `data-i18n` attributes to HTML elements
3. Follow the same pattern as index.html

Example:
```html
<h1 data-i18n="pages.transformation-sessions.title">Transformation Sessions</h1>
<p data-i18n="pages.transformation-sessions.intro">Making lasting change possible...</p>
```

---

**Last Updated:** November 6, 2025  
**Status:** ✅ Main page fully functional | 📋 Detail pages ready for translation
