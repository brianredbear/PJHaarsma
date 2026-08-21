import AVFoundation
import AppKit
import Foundation

let src = URL(fileURLWithPath: CommandLine.arguments[1])
let dest = URL(fileURLWithPath: CommandLine.arguments[2], isDirectory: true)
try FileManager.default.createDirectory(at: dest, withIntermediateDirectories: true)

let asset = AVURLAsset(url: src)
let duration = CMTimeGetSeconds(asset.duration)
let usable = max(0.01, duration - 0.001)
let fps = 48.0
let count = max(2, Int((usable * fps).rounded()))

let gen = AVAssetImageGenerator(asset: asset)
gen.appliesPreferredTrackTransform = true
gen.requestedTimeToleranceBefore = .zero
gen.requestedTimeToleranceAfter = .zero
gen.maximumSize = CGSize(width: 1280, height: 720)

for i in 0..<count {
  let seconds = usable * Double(i) / Double(count - 1)
  let time = CMTime(seconds: seconds, preferredTimescale: 600)
  let cgImage = try gen.copyCGImage(at: time, actualTime: nil)
  let rep = NSBitmapImageRep(cgImage: cgImage)
  guard let data = rep.representation(using: .jpeg, properties: [.compressionFactor: 0.82]) else {
    continue
  }
  let name = String(format: "frame-%03d.jpg", i)
  try data.write(to: dest.appendingPathComponent(name))
}

print(count)
