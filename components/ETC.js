

export default function ETC() {
  return (
    <main className="flex flex-col">
      <section className="relative h-[80vh] w-full overflow-hidden">
        <span className="absolute inset-0 h-full w-full object-cover rounded-md bg-muted" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center space-y-6 px-4 text-center text-white">
          <img
            alt="Company Logo"
            className="drop-shadow-lg"
            height={200}
            src="./images/image1.png"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width={200}
          />
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Ride with Confidence</h1>
          <p className="max-w-3xl text-lg font-medium">
            Experience the future of transportation with our reliable and eco-friendly ridesharing service.
          </p>
          <div className="flex space-x-4">
            {/* <Button variant="primary">Download App</Button>
            <Button variant="secondary">Sign Up</Button> */}
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-20 dark:bg-gray-800">
        
      </section>
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Our Values</h2>
              <p className="text-gray-600 dark:text-gray-400">
                At the heart of our ridesharing service are the core values that guide our every decision.
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <ThumbsUpIcon className="h-8 w-8 text-primary" />
                  <h4 className="text-xl font-bold">Reliability</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    We are committed to providing a dependable and consistent service you can count on.
                  </p>
                </div>
                <div className="space-y-2">
                  <RocketIcon className="h-8 w-8 text-primary" />
                  <h4 className="text-xl font-bold">Innovation</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    We continuously strive to improve and evolve our service, embracing new technologies and ideas.
                  </p>
                </div>
                <div className="space-y-2">
                  <HeartIcon className="h-8 w-8 text-primary" />
                  <h4 className="text-xl font-bold">Community</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    We believe in building a strong, supportive community of drivers and riders who share our values.
                  </p>
                </div>
                <div className="space-y-2">
                  <BoltIcon className="h-8 w-8 text-primary" />
                  <h4 className="text-xl font-bold">Efficiency</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    We strive to provide a seamless and efficient transportation experience, from booking to arrival.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                alt="Values Illustration"
                className="mx-auto"
                height={600}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "600/600",
                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-20 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-bold">Meet the Team</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our dedicated team of experts is committed to delivering an exceptional ridesharing experience.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="space-y-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-900">
              <img
                alt="Team Member 1"
                className="mx-auto h-32 w-32 rounded-full object-cover"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width={200}
              />
              <div className="space-y-2">
                <h4 className="text-xl font-bold">John Doe</h4>
                <p className="text-gray-600 dark:text-gray-400">Co-Founder</p>
                <p className="text-gray-600 dark:text-gray-400">
                  John is a seasoned entrepreneur with a passion for revolutionizing the transportation industry.
                </p>
              </div>
            </div>
            <div className="space-y-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-900">
              <img
                alt="Team Member 2"
                className="mx-auto h-32 w-32 rounded-full object-cover"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width={200}
              />
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Jane Smith</h4>
                <p className="text-gray-600 dark:text-gray-400">Co-Founder</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Jane is a technology expert with a deep understanding of transportation logistics.
                </p>
              </div>
            </div>
            <div className="space-y-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-900">
              <img
                alt="Team Member 3"
                className="mx-auto h-32 w-32 rounded-full object-cover"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width={200}
              />
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Michael Johnson</h4>
                <p className="text-gray-600 dark:text-gray-400">Head of Operations</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Michael oversees the day-to-day operations, ensuring a seamless experience for our riders and drivers.
                </p>
              </div>
            </div>
            <div className="space-y-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-900">
              <img
                alt="Team Member 4"
                className="mx-auto h-32 w-32 rounded-full object-cover"
                height={200}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "200/200",
                  objectFit: "cover",
                }}
                width={200}
              />
              <div className="space-y-2">
                <h4 className="text-xl font-bold">Emily Davis</h4>
                <p className="text-gray-600 dark:text-gray-400">Head of Marketing</p>
                <p className="text-gray-600 dark:text-gray-400">
                  Emily leads our marketing efforts, driving brand awareness and customer acquisition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold">Join the Ride</h2>
          <p className="mt-4 text-lg">Download our app and experience the future of transportation.</p>
          <div className="mt-8 flex justify-center space-x-4">
            {/* <Button variant="secondary">Download on iOS</Button>
            <Button variant="secondary">Download on Android</Button> */}
          </div>
        </div>
      </section>
    </main>
  )
}

function BoltIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function CarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  )
}


function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function LeafIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}


function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}


function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function WalletIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}