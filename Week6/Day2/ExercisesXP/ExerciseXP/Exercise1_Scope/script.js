//#5
const a = 2;
if (true) {
  const a = 5;
  alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared
// with const instead of let ?
// if both of a let - alert(`in the if block 5`) and alert(`outside of the if block 2`);
// if both of a const - alert(`in the if block 5`) and alert(`outside of the if block 2`);
