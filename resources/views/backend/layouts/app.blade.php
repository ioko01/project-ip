@include('backend.includes.head')
@include('backend.includes.script')
@include('backend.includes.leftbar')
@include('backend.includes.rightbar')
@include('backend.includes.topbar')

<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
@yield('head')

<body class="hold-transition light-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">
    <!-- jQuery -->
    <script src="{{ asset('vendor/plugins/jquery/jquery.min.js', env('REDIRECT_HTTPS')) }}"></script>

    <div class="wrapper">

        @yield('topbar')
        @yield('leftbar')

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <div class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1 class="m-0"></h1>
                        </div><!-- /.col -->
                    </div><!-- /.row -->
                </div><!-- /.container-fluid -->
            </div>
            <!-- /.content-header -->

            <!-- Main content -->
            <section class="content">
                <div class="container-fluid">
                    @yield('content')
                </div>
                <!--/. container-fluid -->
            </section>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

        @yield('rightbar')
        @yield('footer')

        @yield('script')


    </div>
    <!-- ./wrapper -->
    @include('sweetalert::alert')
</body>

</html>
