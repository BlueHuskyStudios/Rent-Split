plugins {
    kotlin("js") version "1.6.10"
}

group = "me.kyleggiero"
version = "3.0.0-Lamda.1"

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(kotlin("test"))
}

kotlin {
    js(IR) {
        binaries.executable()
        browser {
            commonWebpackConfig {
                cssSupport.enabled = true
            }

            distribution {
                directory = file("$projectDir/../js/")
            }
        }
    }
}
