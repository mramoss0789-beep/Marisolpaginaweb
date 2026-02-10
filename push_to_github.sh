#!/bin/bash
echo "Configuring remote..."
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/mramoss0789-beep/Marisolpaginaweb.git

echo "Adding files..."
git add .

echo "Committing..."
# Allow empty commit in case everything is already committed
git commit -m "Project upload" --allow-empty

echo "Pushing to GitHub..."
echo "You may be asked for your GitHub username and password (or token)."
git branch -M main
git push -u origin main
