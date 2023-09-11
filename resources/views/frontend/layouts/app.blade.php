@include('frontend.includes.head')
@include('frontend.includes.navbar')
@include('frontend.includes.footer')
@include('frontend.includes.script')

<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    @yield('head')
<body>
    <div id="app" style="min-height: 100vh;" class="d-flex flex-column justify-content-between">
        @yield('navbar')
        <main class="py-4">
            @yield('content')
        </main>
        @yield('footer')
    </div>
    @include('sweetalert::alert')
    @yield('script')
</body>

</html>
