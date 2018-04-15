<?php
/*
*   file này nhận request được rewrite từ dạng /{APIquery} thành /api.php/{APIquery}.
*   và gọi Routing.proc() để định tuyến APIquery về đúng controller.
*
*/

require_once("core/control/routing.php");
\api\core\control\routing::proc();