<?php

namespace FoF\RealTimeDate;

use Flarum\Extend\Frontend;

return [
    (new Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
];
