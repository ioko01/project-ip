@extends('backend.layouts.app')

@section('content')
    <div class="bg-white w-100 px-5 py-4 shadow">
        <div class="d-flex justify-content-between bg-blue p-3 mb-2">
            <div>
                <i class="fa-solid fa-layer-group"></i>
                <h4 class="d-inline">{{ __('Intellectual Property Categories') }}</h4>
            </div>
            <button class="btn btn-warning text-white rounded-0 px-3"
                onclick="default_modal('#modal', 'POST', '{{ __('Add Category') }}', form_category(), '{{ route('backend.category.store') }}')">
                +
                {{ __('Add Category') }}</button>
        </div>
        <div id="intellectual_type">
            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingOne">
                        <h4 class="panel-title">
                            <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne"
                                aria-expanded="true" aria-controls="collapseOne">
                                {{ __('Works that are produced and ready for sale') }} <span
                                    class="bg-blue px-1 rounded">1</span>
                            </a>
                        </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                        <div class="panel-body px-4 py-2">
                            <div class="d-flex justify-content-between category">
                                <a href="#" class="d-block">{{ __('Engineer') }} <span
                                        class="bg-warning text-white fs-6 px-1 rounded">1</span></a>
                                <div>
                                    <a href="#" class="mx-2 text-primary"><i
                                            class="fs-6 fa-solid fa-eye align-middle"></i> ดู</a>
                                    <a href="#" class="mx-2 text-warning"><i
                                            class="fs-6 fa-solid fa-pen-to-square align-middle"></i> แก้ไข</a>
                                    <a href="#" class="mx-2 text-danger"><i
                                            class="fs-6 fa-solid fa-trash align-middle"></i> ลบ</a>
                                </div>
                            </div>

                            <div class="d-flex justify-content-between category">
                                <a href="#" class="d-block">{{ __('Engineer2') }} <span
                                        class="bg-warning text-white fs-6 px-1 rounded">1</span></a>
                                <div>
                                    <a href="#" class="mx-2 text-primary"><i
                                            class="fs-6 fa-solid fa-eye align-middle"></i> ดู</a>
                                    <a href="#" class="mx-2 text-warning"><i
                                            class="fs-6 fa-solid fa-pen-to-square align-middle"></i> แก้ไข</a>
                                    <a href="#" class="mx-2 text-danger"><i
                                            class="fs-6 fa-solid fa-trash align-middle"></i> ลบ</a>
                                </div>
                            </div>

                            <div class="d-flex justify-content-between category">
                                <a href="#" class="d-block">{{ __('Engineer3') }} <span
                                        class="bg-warning text-white fs-6 px-1 rounded">1</span></a>
                                <div>
                                    <a href="#" class="mx-2 text-primary"><i
                                            class="fs-6 fa-solid fa-eye align-middle"></i> ดู</a>
                                    <a href="#" class="mx-2 text-warning"><i
                                            class="fs-6 fa-solid fa-pen-to-square align-middle"></i> แก้ไข</a>
                                    <a href="#" class="mx-2 text-danger"><i
                                            class="fs-6 fa-solid fa-trash align-middle"></i> ลบ</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingTwo">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion"
                                href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                {{ __('Patent / Petty Patent') }} <span class="bg-blue px-1 rounded">350</span>
                            </a>
                        </h4>
                    </div>
                    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div class="panel-body px-4 py-2">
                            <div class="d-flex justify-content-between category">
                                <a href="#" class="d-block">{{ __('Engineer') }} <span
                                        class="bg-warning text-white fs-6 px-1 rounded">1</span></a>
                                <div>
                                    <a href="#" class="mx-2 text-primary"><i
                                            class="fs-6 fa-solid fa-eye align-middle"></i> ดู</a>
                                    <a href="#" class="mx-2 text-warning"><i
                                            class="fs-6 fa-solid fa-pen-to-square align-middle"></i> แก้ไข</a>
                                    <a href="#" class="mx-2 text-danger"><i
                                            class="fs-6 fa-solid fa-trash align-middle"></i> ลบ</a>
                                </div>
                            </div>

                            <div class="d-flex justify-content-between category">
                                <a href="#" class="d-block">{{ __('Engineer') }} <span
                                        class="bg-warning text-white fs-6 px-1 rounded">1</span></a>
                                <div>
                                    <a href="#" class="mx-2 text-primary"><i
                                            class="fs-6 fa-solid fa-eye align-middle"></i> ดู</a>
                                    <a href="#" class="mx-2 text-warning"><i
                                            class="fs-6 fa-solid fa-pen-to-square align-middle"></i> แก้ไข</a>
                                    <a href="#" class="mx-2 text-danger"><i
                                            class="fs-6 fa-solid fa-trash align-middle"></i> ลบ</a>
                                </div>
                            </div>

                            <div class="d-flex justify-content-between category">
                                <a href="#" class="d-block">{{ __('Engineer') }} <span
                                        class="bg-warning text-white fs-6 px-1 rounded">1</span></a>
                                <div>
                                    <a href="#" class="mx-2 text-primary"><i
                                            class="fs-6 fa-solid fa-eye align-middle"></i> ดู</a>
                                    <a href="#" class="mx-2 text-warning"><i
                                            class="fs-6 fa-solid fa-pen-to-square align-middle"></i> แก้ไข</a>
                                    <a href="#" class="mx-2 text-danger"><i
                                            class="fs-6 fa-solid fa-trash align-middle"></i> ลบ</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div id="open_modal_default"></div>
@endsection
