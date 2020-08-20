namespace :setup do
  desc "Fetch google fonts with its api"
  task google_fonts: :environment do
    api_key = Rails.application.credentials.google_font_api_key
    uri = URI("https://www.googleapis.com/webfonts/v1/webfonts?key=#{api_key}")
    res = Net::HTTP.get_response(uri)
    fonts = JSON.parse(res.body)["items"].map do |f|
      f.slice("family", "subsets")
    end
    File.write("./app/javascript/utils/google_fonts.json", JSON.dump(fonts))
  end
end
