var recipes = {};

function updateObjectWithKeyAndValue(recipe,key,value){
  recipe[key] = value;
  return recipe;
}

function updateObjectWithKeyAndValue(recipe,key,value){
  return Object.assign({}, recipe, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
    object[key] = [value1];
   return object;
}

function deleteFromObjectByKey(object,key){
   delete object[key];
   return object;
}