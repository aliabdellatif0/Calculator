# Feedback

_Right click on the file and click Open Preview or `ctrl/cmd + shift + v` to open preview_

## Goals

1.  Working Calculator:

    - Yes 100% working calculator with lots of UI features added in.

2.  Practice using Git / Github Flow:

    - Yes, 3 branches and 25 meaningful commits! Amazing, keep it up.

3.  Application of what you are learning

    - Yes, It looks great and you are still using SCSS etc which is great. You haven't used BEM but are pretty close to it.
    - You have media queries but you need to tidy them up. Hopefully are recap help with them.
    - I can see you using each of the topics we have covered so far in the JS. Except Classes but thats cool.
    - You will want to put all scss files into a folder

---

## Specification

1. PSEUDOCODE - done

   - Yes this is great to see, I honestly think it helped you speed up the whole process by taking a granular look at it.
   - The only thing now is to label it better in your readme. \# \#\# If front of text in a md file will make it look like a heading.
     - Perhaps it is called "thought process" and you basically say you were working on decomposing a problem.

2. README - done

   - Yes it is done, just add a bit more to it / polishing.
     - A little spiel about the project
     - How to set it up?
     - How you broke it down
     - A todo list?

3. 15 commits - done

4. EVAL? - done

5. CAN'T EXPLAIN IT, YOU CANT USE IT - done

   - All good in terms of your code it is very readable and logical. I think if you had to you would be able to talk through it line by line.

---

## Overall

A solid calculator in terms of functionality and UX / UI. Good going mate, I can see pieces of everything we have covered so far which is great. Your code reads well as well which is a bonus. The input alert is a nice feature.

---

## To work on

This is just constructive so you do not have to implement it, its just to tie it up with bows and ribbons.

## To try

Try setting up event listeners as you are going to have to use the event to get the values. I do like the way you have set it up but think you will learn more from adding event listeners rather then using inline functions.

## Bugs

- Media queries
- Multiple decimals eg 5.5.5.5.5
- / 0 will give you infinity

## House keeping

- rename `let x = inTheDisplay.charAt(i);` x just doesn't describe what it is
- rename the `executioner` function
- scss folder
- rename your classes see BEM below
- Remove code you do not use

```js
const numberButtons = document.querySelectorAll("button");

const handleButton = () => {
  alert("clicked");
};
```

## Media queries

At the moment all of your layout is inside a media query `@media screen and (max-width: 1440px)` this means if you load your project on anything bigger it will not have any styles applied to it. Hopefully the recap on thursday will help you address this, let me know if you still need any help with it.

## BEM & Semantics

You should not need that many div's.

You should re name your classes, even if you do not use BEM `grid-container` and `grid-item` aren't the best names. If you were using BEM your block would be calculator then each element would be afterwards.

```html
<div class="calculator">
  <div class="calculator__display" data-cy="display"></div>
  <button class="calculator__key" onclick="clearScreen()">AC</button>
  <button class="calculator__key" onclick="addToScreen('-')">+/-</button>
  <button class="calculator__key" onclick="addToScreen('%')">%</button>
  <button class="calculator__key" onclick="addToScreen('/')" data-cy="divide">/</button>
  <button class="calculator__key" onclick="addToScreen(7)" data-cy="seven">7</button>
  <button class="calculator__key" onclick="addToScreen(8)">8</button>
  <button class="calculator__key" onclick="addToScreen(9)">9</button>
  <button class="calculator__key" onclick="addToScreen('*')" data-cy="multiply">*</button>
  <button class="calculator__key" onclick="addToScreen(4)">4</button>
  <button class="calculator__key" onclick="addToScreen(5)">5</button>
  <button class="calculator__key" onclick="addToScreen(6)">6</button>
  <button class="calculator__key" onclick="addToScreen('-')" data-cy="minus">-</button>
  <button class="calculator__key" onclick="addToScreen(1)">1</button>
  <button class="calculator__key" onclick="addToScreen(2)" data-cy="two">2</button>
  <button class="calculator__key" onclick="addToScreen(3)">3</button>
  <button class="calculator__key" onclick="addToScreen('+')" data-cy="plus">+</button>
  <button class="calculator__key calculator__key--special" onclick="addToScreen(0)">0</button>
  <button class="calculator__key" onclick="addToScreen('.')">.</button>
  <button class="calculator__key" onclick="executioner()" data-cy="equals">=</button>
</div>
```
