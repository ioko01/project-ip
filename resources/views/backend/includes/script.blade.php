@section('script')
    <script src="{{ asset('fontawesome-free-6.4.2-web/js/all.min.js', env('REDIRECT_HTTPS')) }}"></script>
    <script src="{{ asset('js/list-font-awesome.js', env('REDIRECT_HTTPS')) }}"></script>
    <script src="{{ asset('js/dateFormat.js', env('REDIRECT_HTTPS')) }}"></script>

    <script src="{{ asset('js/modal-default.js', env('REDIRECT_HTTPS')) }}" defer></script>
    <script src="{{ asset('js/ajax-backend.js', env('REDIRECT_HTTPS')) }}"></script>

    @if (Request::is('backend/user') ||
            Request::is('backend/users') ||
            Request::is('backend/user/*') ||
            Request::is('backend/users/*'))
        <script src="{{ asset('js/users.js', env('REDIRECT_HTTPS')) }}" defer></script>
    @endif

    @if (Request::is('backend/category') ||
            Request::is('backend/categories') ||
            Request::is('backend/category/*') ||
            Request::is('backend/categories/*'))
        <script src="{{ asset('js/categories.js', env('REDIRECT_HTTPS')) }}" defer></script>
    @endif

    @if (Request::is('backend/subject') ||
            Request::is('backend/subjects') ||
            Request::is('backend/subject/*') ||
            Request::is('backend/subjects/*'))
        <script src="{{ asset('js/subjects.js', env('REDIRECT_HTTPS')) }}" defer></script>
    @endif

    <!-- Bootstrap -->
    <script src="{{ asset('vendor/plugins/bootstrap/js/bootstrap.bundle.min.js', env('REDIRECT_HTTPS')) }}"></script>

    <script src="{{ asset('vendor/plugins/jquery-ui/jquery-ui.min.js', env('REDIRECT_HTTPS')) }}"></script>
    <!-- AdminLTE App -->
    <script src="{{ asset('vendor/dist/js/adminlte.min.js', env('REDIRECT_HTTPS')) }}"></script>

    <script src="{{ asset('vendor/sweetalert/sweetalert.all.js', env('REDIRECT_HTTPS')) }}"></script>

    <script>
        async function fetchi18n() {
            const response = await fetch("{{ asset('js/th.json', env('REDIRECT_HTTPS')) }}")
            const data = await response.json()
            return data
        }

        let data;
        async function __(key, replacements = {}) {
            if (!data) {
                data = await fetchi18n()
            }

            let translation = data[key] || key;
            for (const placeholder in replacements) {
                translation = translation.replace(
                    `:${placeholder}`,
                    replacements[placeholder]
                );
            }
            return translation;
        }
    </script>

    <script src="{{ asset('js/main-backend.js', env('REDIRECT_HTTPS')) }}"></script>
@endsection
