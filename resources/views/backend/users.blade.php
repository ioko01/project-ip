@extends('backend.layouts.app')

@section('content')
    <div class="row">
        <div class="col-md-12 my-3">
            <div class="bg-white w-100 px-5 py-4 shadow">
                <div class="mb-3">
                    <button class="btn btn-primary text-white rounded-0 px-3"
                        onclick="default_modal('#modal', 'POST', '{{ __('Add User') }}', form_user(), '{{ route('backend.user.register') }}', 'user')">
                        +
                        {{ __('Add User') }}</button>
                </div>

                <div class="d-flex justify-content-between bg-primary p-3 mb-2">
                    <div>
                        <i class="fa-solid fa-user"></i>
                        <h4 class="d-inline">{{ __('Users') }}</h4>
                    </div>
                </div>
                <div id="tbl_users" class="table-responsive">
                    <table class="table table-striped">
                        <thead class="text-center">
                            <tr>
                                <td>#</td>
                                <td>{{ __('Full Name') }}</td>
                                <td>{{ __('Username') }}</td>
                                <td>{{ __('Email Address') }}</td>
                                <td>{{ __('Role') }}</td>
                                <td>{{ __('Status') }}</td>
                                <td>{{ __('Created at') }}</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody class="text-center"></tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>


    <!-- Modal -->
    <div id="open_modal_default"></div>
@endsection
