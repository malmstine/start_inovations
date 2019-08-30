# Django 2.2 + Ext JS 6.7
Простое приложение абстрактной редактируемой таблицы. Взаимодействие клиентской части с серверной происходит посредством REST API. Раздача статики а также клиентской части происходит средствами Django. Следует понимать, что это не оптимальное решение, и на боевом сервере требуется другой способ.
### Клиентская часть
Для сборки клинесткой части требуется наличие Sencha Cmd
```
$ cd client/
$ sencha app install --framework=/path/to/extjs/
$ sencha app build
```
### Серверная часть
Установите дополнительные пакеты
```
$ pip install -r requirements.txt
```
Выполните миграции
```
$ python manage.py makemigrations
$ python manage.py migrate
```
Создайте тестовые записи (опционально)
```
$ python manage.py craetetestproducts
```
Добавьте клиентскую часть для раздачи средствами django
```
$ mkdir client
$ cp -r ../client/build/production/Client/* client/
```
Запустите сервер
```
$ python manage.py runserver
```
