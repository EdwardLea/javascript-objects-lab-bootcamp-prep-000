var recipes = {};

function updateObjectWithKeyAndValue(recipe,key,value){
  recipe[key] = value;
  return recipe;
}

function updateObjectWithKeyAndValue(recipe,key,value){
  return Object.assign({}, recipe, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(recipe,key1,value){
   recipe[key] = [value1];
   return recipe
}