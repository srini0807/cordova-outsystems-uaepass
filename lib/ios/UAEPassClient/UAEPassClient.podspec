Pod::Spec.new do |s|
  s.name             = 'UAEPassClient'
  s.version          = '1.3'
  s.summary          = 'UAEPassClient framework an abstract framewok to plug and play any kind of journeys.'
  s.homepage         = "https://selfcare.uaepass.ae/"
  s.description      = <<-DESC
UAEPassPOD framework an abstract framewok to integrate any SP with UAEPASS application.
                       DESC

  s.license          = { :type => 'MIT' }
  s.author           = { 'Mohammed Gomaa' => 'mohammed.abdulbasier@digitaldubai.ae' }
  s.source           = { :git => ".git", :tag => s.version.to_s }
  s.ios.deployment_target = '13.0'
  s.swift_versions = '5'
  s.swift_version = '5'
  s.source_files = 'UAEPassClient/**/*.{swift,plist}'
  s.resources = 'UAEPassClient/**/*.*'
  s.static_framework = true
# Network
  s.dependency 'Alamofire', '5.4.4'
end
