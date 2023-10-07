# calculator using JavaScript
- This is a straightforward calculator created using HTML, CSS, and JavaScript.
- It leverages the 'value' attribute of an HTML input element to capture user input as a string. It then employs the JavaScript method 'eval()' to compute the value of the input expression as a mathematical result.
- It's built following the instruction of https://www.youtube.com/watch?v=HQCLzqhiT2w&list=PL9bD98LkBR7P16BndaNtP4x6Wf5Ib85Hm&index=4&ab_channel=Tech2etc

## things learnt:
### data-num
```
<button type="button" class="btn btn-yellow" data-num="*">*</button>
```
two ways to get the value of data-num:
- const value = element.getAttribute('data-num');
- const dataValue = element.dataset.num;

### eval()
```
let result = eval(screen.value);
```
eval() can calculate the value of a string as mathemathical result but could be risky when the input is unpredictable:

- eval(’’) = undefined

### forEach()
```
numbersAndOperators.forEach((item)=>{
    item.addEventListener('click', () => {
        screen.value += item.dataset.num;
    })
});
```

