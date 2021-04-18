import {Todo} from "@/types/Todo";

const key = 'todos_key';

/**
 * 存todos
 * @param todos
 */
export function saveTodos(todos: Todo[]) {
    // JSON.stringify() --->将JavaScript对象值转换为JSON字符串
    localStorage.setItem(key, JSON.stringify(todos))
}

/**
 * 取todos
 */
export function getTodos(): Todo[] {
    //JSON.parse()---->将JSON字符串解析成JavaScrip对象值
    return <Todo[]>JSON.parse(localStorage.getItem(key) || '[]')
}