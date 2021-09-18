<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Camera Test</title>
  </head>

  <body>
    <h1>WebカメラVue v3テスト</h1>

    <div id="app">
        <p>
            カメラ: 
            <select v-model="selectedVideo" @change="onChange">
            <option disabled value="">Please select one</option>
            <option v-for="(video, key, index) in videos" v-bind:key="index" :value="video.value">
                {{ video.text }}
            </option>
            </select>
        </p>
        <video id="my-video" muted="true" width="500" autoplay playsinline></video>
    </div>

    <script src="https://unpkg.com/vue@next"></script>
    <script>
        //Vue v3
        const app = Vue.createApp({
            data: () => ({
                videos: [],
                selectedVideo: '', //追記
            }),

            mounted: async function() {
                //デバイスへのアクセス
                const deviceInfos = await navigator.mediaDevices.enumerateDevices();

                //カメラの情報を取得
                deviceInfos
                    .filter(deviceInfo => deviceInfo.kind === 'videoinput')
                    .map(video => this.videos.push({text: video.label || `Camera  ${this.videos.length - 1}`, value: video.deviceId}));
            },

            methods: {
                onChange: function (){
                    if(this.selectedVideo != '') this.connectLocalCamera();
                },

                connectLocalCamera: async function (){
                    const constraints = {
                        video: this.selectedVideo ? { deviceId: { exact: this.selectedVideo } } : false
                    }

                    const stream = await navigator.mediaDevices.getUserMedia(constraints);
                    document.getElementById('my-video').srcObject = stream;
                }
            },

        });
        app.mount('#app');

      </script>
  </body>
</html>