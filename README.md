# UI 구현(화면구현) 프로젝트

## 2020-07-27

#### HTML(Hyper Text Markup Language)
* tag를 사용하여 문서를 작성하는 문서작성용 언어
* MarkDown : git의 README.md와 같은 문서를 만들 때
*            tag가 아닌 특수문자(#, * 등)를 문장의 첫번째에 놓아서
*            문서를 꾸미고 모양을 만드는 문서작성용 언어
* MarkUp : 시작 tag <tag>와 종료 tag </tag>로 문서를 감싸서
*          문서를 꾸미고 모양을 만드는 문서작성용 언어
* MarkUp : XML, HTML
* XML : tag에 사용되는 키워드를 임의로 만들 수 있다.
* HTML : tag에 사용되는 키워드가 정해진 것을 사용한다.

#### index.html
* 일반적으로 홈페이지, 웹페이지라고 부르는 Browser를 통해서 접근하는 프로젝트에서
* 제일 먼저 만나게 되는 파일
* = index page, lading page, parking page, 시작페이지
* 시작페이지라는 용어가 가장 알맞는 말이 된다.
* http://naver.com/ 라고 Browser 주소창에 입력을 하면
* http://www.naver.com/index.html 이라고 입력한 것과 같다.
* http://www.naver.com:80/index.html 이 완전한 주소이다.

#### http (hyper text transfer protocol)
* HTML로 만든 문서파일(정보)을 인터넷을 통해서 주고받을 때 사용하는 보편적인 프로토콜
* 모든 내용을 평문(암호화 되지 않은)으로 주고 받는다.
* 사용자에 Web Browser를 통해서 서버에 요청(request)을 수행하면
* 서버는 사용자의 요청을 분석하여 여러가지 처리를 수행한 후 그 결과를 HTML방식의 코드로
* 만들어서 응답(response)하는 구조로 만들어진 프로토콜이다.
* 인터넷 서비스 중에서 www(World Wide Web)환경에서 사용되는 보편적인 프로토콜이다.

#### https (hper text transfer protocol secure socket layer)
* http프로토콜에 암호화 기능을 추가하여 request, response 되는 정보를 전송한다.
* https를 프로토콜로 사용하게 되면, 로그인,회원가입 시 입력한 정보가 암호화되어
* 어느 정도 보안상 안전을 보장한다.
* 최근 모 포털에서 http 프로토콜을 사용하다가 중간에 개인정보가 탈취되는 사고가 난 후로
* 많은 웹서비스에서 https를 기본으로 사용하는 추세이다.

#### 인터넷에서 port 개념
* 한개의 IP 주소를 가진 서버, 클라이언트(PC)는 1:1 연결만을 지원하는 체계이다.
* 하지만 인터넷을 통해서 사용할 수 있는 서비스는 그 종류가 매우 다양하여
* 1개의 IP에서 1개의 서비스만을 사용하는 것은 매우 낭비가 된다.
* OSI 7 layer에서 layer 3인 네트워크 계층에서는 1개의 IP로 1개의 연결을 허용하도록 하고
* layer4인 전송계층에서는 port라는 개념을 사용하여, 여러가지 서비스를 1개의 IP주소에서
* 사용할 수 있도록 만들어 놓은 개념
* http = 80 , https = 443
* well-known port(0 ~ 1023) : 자주 사용하는 서비스용

* TCP/IP 프로토콜은 OSI 7 Layer에서 Layer3와 Layer4를 사용하는 인터넷 프로토콜 규격이다.
 
