<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
        '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
        '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
        '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
        '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
        '/admin/class/room' => [[['_route' => 'class_room_index', '_controller' => 'App\\Controller\\Admin\\ClassRoomController::index'], null, ['GET' => 0], null, true, false, null]],
        '/admin/class/room/new' => [[['_route' => 'class_room_new', '_controller' => 'App\\Controller\\Admin\\ClassRoomController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/admin' => [[['_route' => 'admin_dashboard', '_controller' => 'App\\Controller\\Admin\\DashboardController::index'], null, null, null, false, false, null]],
        '/admin/hall' => [[['_route' => 'hall_index', '_controller' => 'App\\Controller\\Admin\\HallController::index'], null, ['GET' => 0], null, true, false, null]],
        '/admin/hall/new' => [[['_route' => 'hall_new', '_controller' => 'App\\Controller\\Admin\\HallController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/admin/schedule' => [[['_route' => 'schedule_index', '_controller' => 'App\\Controller\\Admin\\ScheduleController::index'], null, ['GET' => 0], null, true, false, null]],
        '/admin/schedule/new' => [[['_route' => 'schedule_new', '_controller' => 'App\\Controller\\Admin\\ScheduleController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/admin/subject' => [[['_route' => 'subject_index', '_controller' => 'App\\Controller\\Admin\\SubjectController::index'], null, ['GET' => 0], null, true, false, null]],
        '/admin/subject/new' => [[['_route' => 'subject_new', '_controller' => 'App\\Controller\\Admin\\SubjectController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/admin/teacher' => [[['_route' => 'teacher_index', '_controller' => 'App\\Controller\\Admin\\TeacherController::index'], null, ['GET' => 0], null, true, false, null]],
        '/admin/teacher/new' => [[['_route' => 'teacher_new', '_controller' => 'App\\Controller\\Admin\\TeacherController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/register' => [[['_route' => 'app_register', '_controller' => 'App\\Controller\\RegistrationController::register'], null, null, null, false, false, null]],
        '/login' => [[['_route' => 'app_login', '_controller' => 'App\\Controller\\SecurityController::login'], null, null, null, false, false, null]],
        '/admin/login' => [[['_route' => 'admin_auth', '_controller' => 'App\\Controller\\SecurityController::adminAuth'], null, null, null, false, false, null]],
        '/logout' => [[['_route' => 'app_logout', '_controller' => 'App\\Controller\\SecurityController::logout'], null, null, null, false, false, null]],
        '/admin/logout' => [[['_route' => 'admin_logout', '_controller' => 'App\\Controller\\SecurityController::adminLogout'], null, null, null, false, false, null]],
        '/' => [[['_route' => 'student_dashboard', '_controller' => 'App\\Controller\\Student\\StudentController::index'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_(?'
                    .'|error/(\\d+)(?:\\.([^/]++))?(*:38)'
                    .'|wdt/([^/]++)(*:57)'
                    .'|profiler/([^/]++)(?'
                        .'|/(?'
                            .'|search/results(*:102)'
                            .'|router(*:116)'
                            .'|exception(?'
                                .'|(*:136)'
                                .'|\\.css(*:149)'
                            .')'
                        .')'
                        .'|(*:159)'
                    .')'
                .')'
                .'|/admin/(?'
                    .'|class/room/([^/]++)(?'
                        .'|(*:201)'
                        .'|/edit(*:214)'
                        .'|(*:222)'
                    .')'
                    .'|hall/([^/]++)(?'
                        .'|(*:247)'
                        .'|/edit(*:260)'
                        .'|(*:268)'
                    .')'
                    .'|s(?'
                        .'|chedule/([^/]++)(?'
                            .'|(*:300)'
                            .'|/edit(*:313)'
                            .'|(*:321)'
                        .')'
                        .'|ubject/([^/]++)(?'
                            .'|(*:348)'
                            .'|/edit(*:361)'
                            .'|(*:369)'
                        .')'
                    .')'
                    .'|teacher/([^/]++)(?'
                        .'|(*:398)'
                        .'|/edit(*:411)'
                        .'|(*:419)'
                    .')'
                .')'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        38 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        57 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
        102 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
        116 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
        136 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception_panel::body'], ['token'], null, null, false, false, null]],
        149 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception_panel::stylesheet'], ['token'], null, null, false, false, null]],
        159 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
        201 => [[['_route' => 'class_room_show', '_controller' => 'App\\Controller\\Admin\\ClassRoomController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        214 => [[['_route' => 'class_room_edit', '_controller' => 'App\\Controller\\Admin\\ClassRoomController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        222 => [[['_route' => 'class_room_delete', '_controller' => 'App\\Controller\\Admin\\ClassRoomController::delete'], ['id'], ['DELETE' => 0], null, false, true, null]],
        247 => [[['_route' => 'hall_show', '_controller' => 'App\\Controller\\Admin\\HallController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        260 => [[['_route' => 'hall_edit', '_controller' => 'App\\Controller\\Admin\\HallController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        268 => [[['_route' => 'hall_delete', '_controller' => 'App\\Controller\\Admin\\HallController::delete'], ['id'], ['DELETE' => 0], null, false, true, null]],
        300 => [[['_route' => 'schedule_show', '_controller' => 'App\\Controller\\Admin\\ScheduleController::show'], ['id'], ['GET' => 0, 'POST' => 1], null, false, true, null]],
        313 => [[['_route' => 'schedule_edit', '_controller' => 'App\\Controller\\Admin\\ScheduleController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        321 => [[['_route' => 'schedule_delete', '_controller' => 'App\\Controller\\Admin\\ScheduleController::delete'], ['id'], ['DELETE' => 0], null, false, true, null]],
        348 => [[['_route' => 'subject_show', '_controller' => 'App\\Controller\\Admin\\SubjectController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        361 => [[['_route' => 'subject_edit', '_controller' => 'App\\Controller\\Admin\\SubjectController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        369 => [[['_route' => 'subject_delete', '_controller' => 'App\\Controller\\Admin\\SubjectController::delete'], ['id'], ['DELETE' => 0], null, false, true, null]],
        398 => [[['_route' => 'teacher_show', '_controller' => 'App\\Controller\\Admin\\TeacherController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        411 => [[['_route' => 'teacher_edit', '_controller' => 'App\\Controller\\Admin\\TeacherController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        419 => [
            [['_route' => 'teacher_delete', '_controller' => 'App\\Controller\\Admin\\TeacherController::delete'], ['id'], ['DELETE' => 0], null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
