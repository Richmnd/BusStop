<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="{{asset('font-awesome-4.7.0/css/font-awesome.min.css')}}">
    @vite(['resources/css/admin.css'])
</head>
<body>
    <div class="wrapper">
        <div class="admin-menu">
            <div class="inner-wrapper">
                <span style="text-transform: uppercase; font-size:20px">bus stop admin</span>
                <div class="menu">
                    <a href="{{route('admin_home')}}">
                        <div class="menu-wrapper">
                            <div>
                                <i class="fa fa-home" style="font-size: 18px" aria-hidden="true"></i>
                                <div>
                                    <span>Home</span>
                                </div>
                            </div>
                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        </div>

                    </a>
                    <a href="{{route('admin_users')}}">
                        <div class="menu-wrapper">
                            <div>
                                <i class="fa fa-users" style="font-size: 14px" aria-hidden="true"></i>
                                <div>
                                    <span>Users</span>
                                </div>
                            </div>
                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        </div class="menu-wrapper">

                    </a>
                    <a href="{{route('admin_buses')}}">
                        <div class="menu-wrapper">
                            <div>
                                <i class="fa fa-bus" aria-hidden="true"></i>
                                <span>Buses</span>
                            </div>
                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        </div>
                    </a>
                    <a href="{{route('admin_routes')}}">
                        <div class="menu-wrapper">
                            <div>
                                <i class="fa fa-location-arrow" aria-hidden="true"></i>
                                <div>
                                    <span>Routes</span>
                                </div>
                            </div>
                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        </div>

                    </a>
                    <a href="{{route('admin_settings')}}">
                        <div class="menu-wrapper"> 
                            <div>
                                <i class="fa fa-cogs" aria-hidden="true"></i>
                                <div>
                                     <span>Settings</span>
                                </div>
                            </div>
                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        </div>

                    </a>
                </div>
            </div>
        </div>
        <div class="admin-content">
            <div class="admin-content-nav">
                
            </div>
            <div class="inner-wrapper">
                @yield('content')
            </div>
        </div>
    </div>
</body>
</html>