import replace from "gulp-replace"; // Поиск и замена
import plumber from "gulp-plumber"; // Сборка ошибок
import notify from "gulp-notify"; // Сообщения (подсказки)
import browsersync from "browser-sync"; // Локальный сервер
import newer from "gulp-newer"; // Проверка обновления картинки
import ifPlugins from "gulp-if"

// Экспортируем объект
export const plugins = {
   replace: replace,
   notify: notify,
   plumber: plumber,
   browsersync: browsersync,
   newer: newer,
   if: ifPlugins,
}