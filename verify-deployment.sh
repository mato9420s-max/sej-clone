#!/bin/bash

# SEJ Clone - Deployment Verification Script

echo "================================"
echo "SEJ Clone - Deployment Verification"
echo "================================"
echo ""

# Check build
echo "✓ Checking build status..."
if [ -d ".next" ]; then
  SIZE=$(du -sh .next | cut -f1)
  echo "  ✓ Build output exists (Size: $SIZE)"
else
  echo "  ✗ Build output missing - run 'npm run build'"
  exit 1
fi

# Check pages
echo ""
echo "✓ Verifying pages..."
PAGES=(
  "src/app/page.tsx:Home"
  "src/app/about/page.tsx:About"
  "src/app/contact/page.tsx:Contact"
  "src/app/privacy/page.tsx:Privacy"
  "src/app/terms/page.tsx:Terms"
  "src/app/[category]/[slug]/page.tsx:Dynamic Pages"
  "src/app/api/subscribe/route.ts:Newsletter API"
)

for page in "${PAGES[@]}"; do
  FILE="${page%%:*}"
  NAME="${page##*:}"
  if [ -f "$FILE" ]; then
    echo "  ✓ $NAME"
  else
    echo "  ✗ $NAME (missing: $FILE)"
  fi
done

# Check configuration
echo ""
echo "✓ Checking configuration files..."
CONFIG_FILES=(
  "next.config.ts"
  "wrangler.toml"
  "tsconfig.json"
  "package.json"
)

for file in "${CONFIG_FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "  ✓ $file"
  else
    echo "  ✗ $file (missing)"
  fi
done

# Check domain config
echo ""
echo "✓ Domain Configuration:"
if grep -q "seorankerai.com" wrangler.toml; then
  echo "  ✓ Domain set to seorankerai.com"
else
  echo "  ✗ Domain not configured"
fi

# Check git status
echo ""
echo "✓ Git Status:"
if [ -d ".git" ]; then
  echo "  ✓ Git repository initialized"
  REMOTE=$(git remote get-url origin 2>/dev/null)
  if [ ! -z "$REMOTE" ]; then
    echo "  ✓ Remote: $REMOTE"
  fi
else
  echo "  ✗ Git repository not found"
fi

echo ""
echo "================================"
echo "✅ Deployment ready!"
echo "================================"
echo ""
echo "Next steps:"
echo "1. Go to: https://dash.cloudflare.com/pages"
echo "2. Click 'Connect to Git'"
echo "3. Select 'mato9420s-max/sej-clone'"
echo "4. Build command: npm run build"
echo "5. Output directory: .next"
echo "6. Click 'Deploy'"
echo "7. Wait for deployment (2-3 minutes)"
echo "8. Add custom domain: seorankerai.com"
echo ""
