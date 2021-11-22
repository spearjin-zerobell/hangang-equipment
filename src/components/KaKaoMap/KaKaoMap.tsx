import { dom } from '@/utils/babel';
import { Node } from '@/components';
import { generateClassName } from '@/utils';
import style from './KaKaoMap.module.scss';
import markerSrc from './assets/icon/marker.svg';

function makeOverListener(map: any, marker: any, infowindow: any) {
  return function () {
    console.log('up');
    infowindow.open(map, marker);
  };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
function makeOutListener(infowindow: any) {
  return function () {
    console.log('close');
    infowindow.close();
  };
}

/** @jsx dom */
export default class KaKaoMap extends Node {
  center = [37.277164773495606, 127.10769716943645];

  map: {
    setDraggable: (pram: boolean) => void;
    setZoomable: (pram: boolean) => void;
    setBounds: (param: any) => void;
    setLevel: (param: any) => void;
    getLevel: () => number;
  };

  bounds: any;

  componentDidMount() {
    const mapContainer = document.getElementById('map'); // 지도를 표시할 div
    const mapOption = {
      center: new window.kakao.maps.LatLng(...this.center), // 지도의 중심좌표
      level: 7, // 지도의 확대 레벨
    };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    this.map = new window.kakao.maps.Map(mapContainer, mapOption);
    this.map.setDraggable(false);
    this.map.setZoomable(false);

    const points = [
      {
        content: '<div>한강종합설비</div>',
        lating: new window.kakao.maps.LatLng(...this.center),
      },
      {
        content: '<div style=" text-align: center; width: 230px; padding: 0.5rem;">기흥역 / 기흥역시외버스정류소</div>',
        lating: new window.kakao.maps.LatLng(37.27571674069106, 127.11593326884406),
      },
      {
        content: '<div style=" text-align: center; width: 150px; padding: 0.5rem;">수원IC</div>',
        lating: new window.kakao.maps.LatLng(37.26653495264417, 127.10392716943618), // 수원IC
      },
      {
        content:
          '<div style=" text-align: center; width: 230px; padding: 0.5rem;">신갈버스정류장 / 신갈고속시외버스정류소</div>',
        lating: new window.kakao.maps.LatLng(37.27165022486148, 127.10431700121289), // 버스정류장
      },
    ];

    this.bounds = new window.kakao.maps.LatLngBounds();
    const imageSize = new window.kakao.maps.Size(20, 28);
    const imageOption = { offset: new window.kakao.maps.Point(10, 35) };

    const markerImage = new window.kakao.maps.MarkerImage(markerSrc, imageSize, imageOption);

    points.forEach(({ lating, content }) => {
      if (!(lating.Ma === this.center[0] && lating.La === this.center[1])) {
        const marker = new window.kakao.maps.Marker({ map: this.map, position: lating, image: markerImage });
        marker.setMap(this.map);

        const infoWindow = new window.kakao.maps.InfoWindow({
          content, // 인포윈도우에 표시할 내용
          disableAutoPan: true,
        });
        // infoWindow.open(this.map, marker);
        // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
        // 이벤트 리스너로는 클로저를 만들어 등록합니다
        // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
        window.kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(this.map, marker, infoWindow));
        window.kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infoWindow));
      }
      this.bounds.extend(lating);
    });

    this.map.setBounds(this.bounds);

    // 주소로 맵 위치 설정
    const geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch('경기 용인시 기흥구 신구로53번길 18', (result: any[], status: boolean) => {
      // 정상적으로 검색이 완료됐으면
      if (status === window.kakao.maps.services.Status.OK) {
        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과값으로 받은 위치를 마커로 표시합니다
        const marker = new window.kakao.maps.Marker({
          map: this.map,
          position: coords,
        });

        // const content = `<div style="padding: 7px 0px 9px 0px; width: 150px; text-align: center;">한강설비</div>`;
        const content = `
          <div style= 'width: 265px; height: auto; padding: 1rem;'>
            <div class="${style.infoTitle}">
              <span>한강종합설비</span>
              <a href="https://map.naver.com/v5/directions/14149565.670374472,4477793.306416428,%ED%95%9C%EA%B0%95%EC%A2%85%ED%95%A9%EC%84%A4%EB%B9%84,12815085,PLACE_POI/-/-/transit?c=14148632.8961413,4477793.3058404,15,0,0,0,dh" target="_blank" class="link">길찾기</a>
            </div> 
            <div class="${style.infoContent}"> 
                <span class="ellipsis">경기도 용인시 기흥구 신구로53번길 18</span> 
                <span class="jibun ellipsis">(우) 16968 (지번) 신갈동 29-5</span>
            </div>  
          </div>`;

        // 인포윈도우로 장소에 대한 설명을 표시합니다
        const infowindow = new window.kakao.maps.InfoWindow({
          content,
        });
        infowindow.open(this.map, marker);
      }
    });
  }

  zoomIn() {
    this.map.setLevel(this.map.getLevel() - 1);
  }

  zoomOut() {
    this.map.setLevel(this.map.getLevel() + 1);
  }

  template() {
    return (
      <div class={style.map_wrap}>
        <div
          id="map"
          style={{
            width: '100%',
            'max-height': '500px',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
            'border-radius': '0.55rem',
            border: '1px solid #c1c9d6',
          }}
        >
          <span class="a11yHidden">한강설비 지도</span>
        </div>
        <div class={generateClassName(style.customZoomcontrol, style.radius_border)}>
          <span onclick={this.zoomIn.bind(this)}>
            <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png" alt="확대" />
          </span>
          <span onclick={this.zoomOut.bind(this)}>
            <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png" alt="축소" />
          </span>
        </div>
      </div>
    );
  }
}
