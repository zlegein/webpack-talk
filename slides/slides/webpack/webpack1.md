
<section>
    <pre class="stretch highlight cpp">
# pragma once

void step_one_setup(ofApp* app)
{
    auto orbit_points = app-><span class="fragment zoom-in highlight-current-green">orbitPointsFromTimeInPeriod</span>(
        app-><span class="fragment zoom-in highlight-current-green">timeInPeriodFromMilliseconds</span>(
            app->updates.
                <span class="fragment zoom-in highlight-current-green" data->milliseconds</span>()));
}
    </pre>
</section>


