<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

class GenerateTranslations extends Command
{
    protected $signature = 'translations:generate';

    public function handle()
    {

        foreach (config('app.locales') as $locale) {
            File::put(lang_path("{$locale}.json"), json_encode(require lang_path("{$locale}/messages.php")));
            File::put(public_path("js/{$locale}.json"), json_encode(require lang_path("{$locale}/messages.php")));
        }

        $this->info('Translations generated successfully.');
    }
}
