# IPL social

## Informations
- Nom : AISSA
- Prénom : NASSIM
- Email Vinci : nassim.aissa@student.vinci.be

## URL du projet GitHub
https://github.com/nassim-aissa-vinci/ipl-social

## Explication du code
Ce projet met en place une pipeline CI via GitHub Actions. Le code principal contient une fonction de
validation d’email écrite en TypeScript, développée en TDD (tests d’abord). La pipeline exécute `npm run build`
pour compiler TypeScript puis `npm test` pour lancer les tests Jest à chaque push/pull request sur `main`.

## Lancer les tests
```bash
npm test
```