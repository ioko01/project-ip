<?php

function input_method($method)
{
    if (strtoupper($method) == strtoupper('POST')) {
        return '';
    } else if (strtoupper($method) == strtoupper('GET')) {
        return '';
    } else if (strtoupper($method) == strtoupper('PUT')) {
        return '<input type="hidden" name="_method" value="PUT" />';
    } else if (strtoupper($method) == strtoupper('DELETE')) {
        return '<input type="hidden" name="_method" value="DELETE" />';
    }
    return '';
}
