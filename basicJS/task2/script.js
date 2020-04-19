// Задачи на понимание основ JS (с реальных собеседований)

// Ответьте на вопросы. Если возникают затруднения - воспользуйтесь выводом в консоль (console.log())

// Вопросы к этому заданию
// Какое будет выведено значение: let x = 5; alert( x++ ); ?
    // Число 5, т.к постфиксный инкремент отработает уже после вывода знычения на экран.
    let x = 5; 
    console.log(x++);
// Чему равно такое выражение: [ ] + false - null + true ?
    // NaN, ошибка в математических операндах.
    console.log([] + false - null + true);
// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
    // Числу 2, операторы присваивания право-асоциативны
    let y = 1;
    x = y = 2;
    console.log(x);
// Чему равна сумма [ ] + 1 + 2?
    // Строке “12”, [ ] – пустая строка, поэтому происходит конкатенация операндов.
    console.log([] + 1 + 2);
// Что выведет этот код: alert( "1"[0] )?
    // Строка 1, т.к обращаемся к первому элементу строки, то есть к “1”.
    console.log("1"[0]);
// Чему равно 2 && 1 && null && 0 && undefined ?
    // null, т.к null - первое не истинное значение, дальнейшие сравнения не требуются.
    console.log(2 && 1 && null && 0 && undefined);
// Есть ли разница между выражениями? !!( a && b ) и (a && b)?
    // Да, первое выражение вернет false, второе - 0.
    let a = 0, b = 1;
    console.log(!!(a && b));
    console.log((a && b));
// Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
    // Число 3, сначала по приоритету сравниваются 2 && 3, т.к оба значения истинны,
    // то возвращается последнее т.е 3, далее сравниваются null || 3, вернётся заначение 3,
    // т.к оно истинно, и затем сравниваются 3 || 4, вернётся 3, т.к оба значения истинны и
    // вернется первое.
    console.log(null || 2 && 3 || 4);    
// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
    // Нет, вернется false, т.к это два разных объекта.
    a = [1, 2, 3];
    b = [1, 2, 3];
    console.log(a == b);
// Что выведет этот код: alert( +"Infinity" ); ?
    // Infinity с числовым типом данных - Infinity.
    console.log(+"Infinity");
// Верно ли сравнение: "ёжик" > "яблоко"?
    // Верно, т.к сравниваются коды первых символов строк по таблице Unicode,
    // “ё” = 1105, а “я” = 1103, соответственно первое значение больше второго.
    console.log("ёжик" > "яблоко");
// Чему равно 0 || "" || 2 || undefined || true || false ?
    // Числу 2, т.к все сравнения на логическое ИЛИ(||), то первое истинное
    // значение - в нащем случае число 2, делает нецелесообразным продолжать
    // дальнейшие сравнения т.к всегда будет возвращаться истина. 
    console.log(0 || "" || 2 || undefined || true || false);