echo 'HTTP/1.1 200 OK'
echo 'Content-Type: text/html; charset=utf-8'
echo -e
[[ -z $SERVER_DIR ]] && SERVER_DIR='.'
cat "$SERVER_DIR/index.html"