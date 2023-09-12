@section('script')
    <script src="{{ asset('fontawesome-free-6.4.2-web/js/all.min.js', env('REDIRECT_HTTPS')) }}"></script>
    <script src="{{ asset('js/modal-default.js', env('REDIRECT_HTTPS')) }}" defer></script>
    <script src="{{ asset('js/ajax-backend.js', env('REDIRECT_HTTPS')) }}"></script>

    <!-- Bootstrap -->
    <script src="{{ asset('vendor/plugins/bootstrap/js/bootstrap.bundle.min.js', env('REDIRECT_HTTPS')) }}"></script>

    <script src="{{ asset('vendor/plugins/jquery-ui/jquery-ui.min.js', env('REDIRECT_HTTPS')) }}"></script>
    <!-- AdminLTE App -->
    <script src="{{ asset('vendor/dist/js/adminlte.min.js', env('REDIRECT_HTTPS')) }}"></script>

    <script src="{{ asset('vendor/sweetalert/sweetalert.all.js', env('REDIRECT_HTTPS')) }}"></script>

    <script>
        async function __(key, replacements = {}) {
            const response = await fetch("{{ asset('js/th.json', env('REDIRECT_HTTPS')) }}")
            const data = await response.json()

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
