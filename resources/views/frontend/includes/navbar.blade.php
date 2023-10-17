@section('navbar')
    <div style="position: sticky;top:0px;z-index:9999;">
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
                                data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true"
                                aria-expanded="false" v-pre>
                                <i class="fa-solid fa-coins align-middle"></i> <span
                                    class="d-inline d-md-none d-lg-inline  text-wrap">{{ __('Intellectual Property') }}</span>
                            </a>

                            @php
                                $categories = DB::table('categories')
                                    ->where('categories.status_id', 1)
                                    ->get();
                                $categories = $categories->toArray();
                                $all_category = '';
                                $children = [];
                                $dropdown = [];
                                DB::disconnect('categories');
                                foreach ($categories as $key => $value) {
                                    if ($value->child) {
                                        array_push($children, $value);
                                    }
                                }
                                
                                foreach ($categories as $key => $category) {
                                    foreach ($children as $key => $child) {
                                        if ($child->child == $category->id) {
                                            $dropdown[$category->id] = true;
                                        }
                                    }
                                }
                                
                                foreach ($categories as $key => $value) {
                                    if ($value->parent == 0) {
                                        $all_category .= '<div style="position:relative;">';
                                        if (array_search($value->id, array_keys($dropdown)) !== false) {
                                            $all_category .= '<a data-bs-toggle="dropdown" aria-expanded="false" class="dropdown-item text-nowrap dropdown-toggle" href="#">';
                                        } else {
                                            $all_category .= '<a class="dropdown-item text-nowrap" href="#">';
                                        }
                                        if (Config::get('app.locale') == 'th') {
                                            $name = $value->name_th;
                                        } else {
                                            if ($value->name_en) {
                                                $name = $value->name_en;
                                            } else {
                                                $name = $value->name_th;
                                            }
                                        }
                                
                                        $all_category .= '<i class="fa-solid fa-xs fa-' . $value->icon . ' align-middle"></i> ' . $name . ' <span class="fs-6 bg-light px-2 text-dark rounded">1</span></a>';
                                    }
                                
                                    if (array_search($value->id, array_keys($dropdown)) !== false) {
                                        $all_category .= '<ul class="submenu dropdown-menu">';
                                        foreach ($children as $key => $child) {
                                            if ($child->parent == 1 && $child->child == $value->id) {
                                                if (Config::get('app.locale') == 'th') {
                                                    $child_name = $child->name_th;
                                                } else {
                                                    if ($child->name_en) {
                                                        $child_name = $child->name_en;
                                                    } else {
                                                        $child_name = $child->name_th;
                                                    }
                                                }
                                
                                                $all_category .=
                                                    '<li>
                                                        <a href="#" class="dropdown-item">' .
                                                    '<i class="fa-solid fa-xs fa-' .
                                                    $child->icon .
                                                    ' align-middle"></i> ' .
                                                    $child_name .
                                                    '</a>
                                            </li>';
                                            }
                                        }
                                        $all_category .= '</ul>';
                                    }
                                    if ($value->parent == 0) {
                                        $all_category .= '</div>';
                                    }
                                }
                                
                            @endphp

                            <div class="dropdown-menu dropdown-menu-start w-auto dropend" aria-labelledby="navbarDropdown">
                                {!! $all_category !!}
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
