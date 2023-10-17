@extends('frontend.layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center bg-white p-4 shadow-sm rounded-3 my-5">
            <div class="col-md-12 p-0 position-relative">
                <div class="bg-blue px-4 shadow-sm">
                    <h1 class="fs-1 m-0">สถิติการขอยื่นจด - ประจำปีงบประมาณ 2566</h1>
                </div>
            </div>
            <div class="row my-3">
                @forelse ($categories as $category)
                    @if ($category->parent == 0)
                        <div class="col-md-3 p-0">
                            <div class="card w-100 bg-white border-light card-static">
                                <div class="card-body text-blue text-center">
                                    <div class="card-header bg-transparent border-bottom-0">
                                        <i class="fa-5x fa-solid fa-{{ $category->icon }}"></i>
                                    </div>
                                    <div style="font-size: 24px;" class="card-body pb-0">
                                        @if (Config::get('app.locale') == 'th')
                                            {{ $category->name_th }}
                                        @elseif($category->name_en)
                                            {{ $category->name_en }}
                                        @else
                                            {{ $category->name_th }}
                                        @endif
                                    </div>
                                    <div style="font-size: 40px;"
                                        class="card-footer text-secondary bg-transparent border-top-0">

                                        @forelse ($count as $key => $item)
                                            @if ($category->id == $key)
                                                {{ $item }}
                                            @else
                                                0
                                            @endif
                                        @empty
                                            0
                                        @endforelse
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endif
                @empty
                @endforelse
            </div>
        </div>


        @forelse ($categories as $category)
            @if ($category->parent == 0)
                <div class="row justify-content-center bg-white p-4 shadow-sm rounded-3 my-5">
                    <div class="col-md-12 p-0 position-relative">
                        <div class="bg-blue px-4 shadow-sm">
                            <h1 class="fs-1 m-0 py-2">
                                <i class="fa-solid fa-xs fa-{{ $category->icon }} align-middle"></i>
                                @if (Config::get('app.locale') == 'th')
                                    {{ $category->name_th }}
                                @elseif($category->name_en)
                                    {{ $category->name_en }}
                                @else
                                    {{ $category->name_th }}
                                @endif
                            </h1>

                        </div>
                    </div>
                    <div class="row my-3">
                        @forelse ($subjects as $subject)
                            @php
                                $explode_category = explode(',', $subject->categories_id);
                            @endphp
                            @foreach ($explode_category as $exp)
                                @foreach ($categories as $c2)
                                    @if ($exp == $c2->id && $c2->parent == 1)
                                        @if ($c2->child == $category->id)
                                            <div class="col-md-3 p-3">
                                                <div class="border h-100">
                                                    <div class="card w-100 h-100 bg-white border-0 card-product">
                                                        <div class="card-expanded-hover">
                                                            <img src="{{ asset('images/1.jpg', env('REDIRECT_HTTPS')) }}"
                                                                class="card-img-top" alt="...">
                                                        </div>
                                                        <div class="card-body">
                                                            <div
                                                                class="card-title d-flex flex-column justify-content-between h-100">
                                                                <p>
                                                                    @if (Config::get('app.locale') == 'th')
                                                                        {{ $subject->name_th }}
                                                                    @elseif($subject->name_en)
                                                                        {{ $subject->name_en }}
                                                                    @else
                                                                        {{ $subject->name_th }}
                                                                    @endif
                                                                </p>
                                                                <div class="d-flex align-items-center text-secondary">
                                                                    <i class="fa-1x fa-regular fa-clock"></i><span>&nbsp;
                                                                        {{ thaiDateFormat($subject->created_at) }}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        @endif
                                    @endif
                                @endforeach
                            @endforeach
                        @empty
                        @endforelse


                    </div>
                    <div class="row justify-content-end">
                        <button class="btn btn-light w-auto border rounded-0 p-2 px-4">ดูทั้งหมด</button>
                    </div>
                </div>
            @else
            @endif
        @empty
        @endforelse

    </div>
@endsection
