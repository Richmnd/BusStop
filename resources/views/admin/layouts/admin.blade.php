<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="{{asset('font-awesome-4.7.0/css/font-awesome.min.css')}}">
    @vite(['resources/css/admin.css', 'resources/js/app.js'])
</head>
<body>
    <div class="wrapper">
        <div class="admin-menu">
            <div class="inner-wrapper">
                <div id="example"></div>
                <span style="text-transform: uppercase; font-size:20px">bus stop admin</span>
                <div id="menu">
                    
                </div>
            </div>
        </div>
        <div class="admin-content">
            <div class="admin-content-nav">
                
            </div>
            <div class="inner-wrapper" id="admin-wrapper">
                @yield('content')
            </div>
        </div>
    </div>
</body>
</html>