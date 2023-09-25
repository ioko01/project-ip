@section('navbar')
    <div>
        <div id="line_on_navbar" class="bg-blue"></div>
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand text-blue fs-4" href="{{ url('/') }}">
                    {{ config('app.name') }}
                </a>
                <button style="box-shadow: none;" class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav me-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ms-auto gap-3">
                        <!-- Authentication Links -->
                        @auth
                            <li class="nav-item">
                                <a class="nav-link not-hover p-2 text-warning" href="{{ route('backend.dashboard.index') }}"><i
                                        class="fa-solid fa-sliders align-middle"></i> <span
                                        class="d-inline d-md-none d-lg-inline text-wrap">{{ __('Dashboard') }}</span></a>
                            </li>
                        @endauth
                        <li class="nav-item">
                            <a class="nav-link p-2 {{ active_route(Request::is('/')) }}" href="/"><i
                                    class="fa-solid fa-house align-middle"></i> <span
                                    class="d-inline d-md-none d-lg-inline  text-wrap">{{ __('Home') }}</span></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link p-2 dropdown-toggle" href="#" role="button"
                                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                <i class="fa-solid fa-coins align-middle"></i> <span
                                    class="d-inline d-md-none d-lg-inline  text-wrap">{{ __('Intellectual Property') }}</span>
                            </a>

                            @php
                                $categories = DB::table('categories')
                                    ->where('categories.status_id', 1)
                                    ->get();
                            @endphp

                            <div class="dropdown-menu dropdown-menu-start w-auto dropend" aria-labelledby="navbarDropdown">
                                @forelse ($categories as $item)
                                    @if ($item->parent == 0)
                                        <a class="dropdown-item text-wrap dropdown-toggle" href="#">
                                            {{ __($item->name_th) }} <span
                                                class="fs-6 bg-light px-2 text-dark rounded">1</span>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><button class="dropdown-item" type="button">Action</button></li>
                                        </ul>
                                    @endif
                                @empty
                                @endforelse
                            </div>
                        </li>
                        @guest
                            @if (Route::has('login'))
                                <li class="nav-item">
                                    <a class="nav-link p-2 {{ active_route(Request::is('login')) }}"
                                        href="{{ route('login') }}"><i class="fa-solid fa-right-to-bracket align-middle"></i>
                                        <span class="d-inline d-md-none d-lg-inline  text-wrap">{{ __('Login') }}</span></a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link p-2 dropdown-toggle" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    <i class="fa-solid fa-user align-middle"></i> <span
                                        class="d-inline d-md-none d-lg-inline  text-wrap">{{ Auth::user()->name }}</span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-start w-auto" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item text-wrap" href="{{ route('logout') }}"
                                        onclick="event.preventDefault();
                                             document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>
    </div>
@endsection
