import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">&copy; 2023 Relari, inc. All rights reserved.</div>

          {/* Legal links */}
          <div className="text-sm text-gray-600">
            <a href="https://docs.google.com/document/d/e/2PACX-1vQ9N1bHccZHO3pdp2Pr2jNKGpCp2UmJKFh0bClXAtGvspudECCrsRC9DCzXsYdfRCDYnZ3ZCHeQu-sU/pub" className="underline mr-8">Terms of Use</a>
            <a href="https://docs.google.com/document/d/e/2PACX-1vT6600pn6GcrGWbPLiC3jcD19medb5nPga5_19dZOesoU096kGhyuVM3DeqZnNBhWqpFCOhaq5mO_L2/pub" className="underline">Privacy Policy</a>
          </div>

        </div>

      </div>
    </footer>
  )
}
