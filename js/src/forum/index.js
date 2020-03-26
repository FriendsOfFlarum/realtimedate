import app from 'flarum/app';
import humanTime from 'flarum/utils/humanTime'

app.initializers.add('fof-realtimedate', () => {
    moment.relativeTimeThreshold('s', 60);
    moment.relativeTimeThreshold('ss', 10);
    moment.relativeTimeThreshold('m', 60);


    function updateHumanTimes() {
        $('[data-humantime]').each(function() {
            const $this = $(this);
            const ago = humanTime($this.attr('datetime'));

            $this.html(ago);
        });
    }

    $(document).ready(function(){
        setInterval(updateHumanTimes, 1000);
    });
});
