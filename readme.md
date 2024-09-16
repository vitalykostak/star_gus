-   node - v20.11.1
-   npm install
-   npm run storybook

## Основні моменти

Інпут дуже варіативний, багато використовував свого роду factory method в react - без цього буде спагетті код з десятками if в одному-двох файлах.
[input](./src/shared/ui/kit/input/input.tsx).

#### Не встиг доробити:

-   дубляж типів - повиносити окремо
-   infoIcon tooltip
-   badge

#### Не зрозумілі моменти

-   поведінка helpText при labelPosition = side
-   розмір інпута при labelPosition = side
-   поведінка якщо значення !isValid при labelPosition = side
