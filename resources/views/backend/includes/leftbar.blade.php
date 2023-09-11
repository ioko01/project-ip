@section('leftbar')
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-light-primary elevation-4">
        <!-- Brand Logo -->
        <p class="brand-link text-green text-center">
            <strong class="d-block">{{ config('app.name') }} </strong>
            <span class="d-block text-warning text-sm">{{ __('Dashboard') }}</span>
        </p>

        <!-- Sidebar -->
        <div class="sidebar" id="navbar-conference-backend">
            <!-- Sidebar user panel (optional) -->
            <div class="user-panel mt-3 py-3 text-center">
                <div class="info">

                </div>
            </div>


            <!-- Sidebar Menu -->
            <nav class="mt-2">
                <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                    data-accordion="false">
                    <!-- Add icons to the links using the .nav-icon class
                       with font-awesome or any other icon font library -->
                    <li class="nav-header text-secondary">{{ __('Dashboard') }}</li>
                    <li class="nav-item">
                        <a href="/" class="nav-link text-info">
                            <i class="nav-icon fas fa-home"></i>
                            <p>{{ __('Website') }}</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="{{ route('backend.dashboard.index') }}"
                            class="nav-link {{ active_route(Request::is('backend/dashboard')) }}">
                            <i class="nav-icon fas fa-tachometer-alt"></i>
                            <p>{{ __('Dashboard') }}</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="{{ route('backend.intellectuals.index') }}"
                            class="nav-link {{ active_route(Request::is('backend/intellectuals')) }}">
                            <i class="fa-solid fa-layer-group"></i>
                            <p>{{ __('Categories') }}</p>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="{{ route('backend.users.index') }}" class="nav-link {{ active_route(Request::is('backend/users')) }}">
                            <i class="nav-icon fas fa-user"></i>
                            <p>{{ __('Users') }}</p>
                        </a>
                    </li>
                </ul>
            </nav>
            <!-- /.sidebar-menu -->
        </div>
        <!-- /.sidebar -->
    </aside>
@endsection
