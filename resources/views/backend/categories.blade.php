@extends('backend.layouts.app')

@section('content')
    <div class="row">
        <div class="col-md-12 my-3">
            <div class="bg-white w-100 px-5 py-4 shadow">
                <div class="mb-3">
                    <button class="btn btn-primary text-white rounded-0 px-3"
                        onclick="default_modal('#modal', 'POST', '{{ __('Add Parent Category') }}', form_parent_category(), '{{ route('backend.category.store') }}')">
                        +
                        {{ __('Add Parent Category') }}</button>

                    <button class="btn btn-warning text-white rounded-0 px-3"
                        onclick="default_modal('#modal', 'POST', '{{ __('Add Child Category') }}', form_category(), '{{ route('backend.category.store') }}')">
                        +
                        {{ __('Add Child Category') }}</button>
                </div>


                <div class="d-flex justify-content-between bg-primary p-3 mb-2">
                    <div>
                        <i class="fa-solid fa-layer-group"></i>
                        <h4 class="d-inline">{{ __('Categories') }}</h4>
                    </div>
                </div>
                <div id="intellectual_type">
                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true"></div>
                </div>
            </div>
        </div>
    </div>


    <!-- Modal -->
    <div id="open_modal_default"></div>
@endsection
