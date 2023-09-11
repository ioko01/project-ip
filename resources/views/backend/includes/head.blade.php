@section('head')

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Theme style -->
        <link rel="stylesheet" href="{{ asset('vendor/dist/css/adminlte.min.css?v=2', env('REDIRECT_HTTPS')) }}">

        <!-- Scripts -->
        @vite(['resources/sass/app.scss', 'resources/js/app.js'])


        <!-- Main CSS -->
        <link rel="stylesheet" href="{{ asset('css/main-backend.css?v=1', env('REDIRECT_HTTPS')) }}" defer />
        <link rel="stylesheet" href="{{ asset('fontawesome-free-6.4.2-web/css/all.min.css?v=1', env('REDIRECT_HTTPS')) }}"
            defer />
    </head>
@endsection
