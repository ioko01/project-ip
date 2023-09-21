@extends('backend.layouts.app')

@section('content')
    <div class="row">
        <div class="col-md-12 my-3">
            <div class="bg-white w-100 px-5 py-4 shadow">
                <div class="mb-3">
                    <button class="btn btn-primary text-white rounded-0 px-3"
                        onclick="default_modal('#modal', 'POST', '{{ __('Add Subject') }}', form_subject(), '{{ route('backend.subject.store') }}', 'subject')">
                        +
                        {{ __('Add Subject') }}</button>
                </div>

                <div class="d-flex justify-content-between bg-primary p-3 mb-2">
                    <div>
                        <i class="fa-solid fa-book"></i>
                        <h4 class="d-inline">{{ __('Subject') }}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Modal -->
    <div id="open_modal_default"></div>
@endsection
