export const combineClasses = (...classes: any) => {
  return classes.filter((item: any) => !!item).join(' ');
};
