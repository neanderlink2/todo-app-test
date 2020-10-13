'use strict';
const { sanitizeEntity } = require('strapi-utils');
/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    const todoList = ctx.request.body;
    const todoItems = ctx.request.body.todo_items;
    if (typeof todoItems === "string" && todoItems.length <= 0) {
      return;
    }
    const entities = [];
    for (let dado of todoItems) {
      const entity = await strapi.services['todo-item'].create(dado);
      entities.push(entity);
    }
    console.log(entities, 'todo items');
    todoList.todo_items = entities;

    let entity = await strapi.services['todo-list'].create(todoList);
    return sanitizeEntity(entity, { model: strapi.models['todo-list'] });
  }
};
