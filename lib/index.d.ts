/**
 * Export HAP
 */
import type { API } from "./api";
export declare type HAP = API["hap"];
/**
 * Export API const enums
 */
export { APIEvent, PluginType, } from "./api";
/**
 * Export types for basically everything but the actual API implementation
 */
export type { PluginIdentifier, PluginName, ScopedPluginName, AccessoryName, PlatformName, AccessoryIdentifier, PlatformIdentifier, PluginInitializer, AccessoryPluginConstructor, AccessoryPlugin, PlatformPluginConstructor, DynamicPlatformPlugin, StaticPlatformPlugin, IndependentPlatformPlugin, API, } from "./api";
/**
 * Export Platform Accessory const enums
 */
export { PlatformAccessoryEvent, } from "./platformAccessory";
/**
 * Export Platform Accessory Types
 */
export type { PlatformAccessory, UnknownContext, } from "./platformAccessory";
/**
 * Export server types
 */
export type { HomebridgeOptions, } from "./server";
/**
 * Export bridge types
 */
export type { HomebridgeConfig, BridgeConfiguration, AccessoryConfig, PlatformConfig, } from "./bridgeService";
/**
 * Export port types
 */
export type { ExternalPortsConfiguration, } from "./externalPortService";
/**
 * Export User Types
 */
export type { User } from "./user";
/**
 * Export Logger const enums
 */
export { LogLevel, } from "./logger";
/**
 * Export Logger types
 */
export type { Logger, Logging, } from "./logger";
/**
 * Export the CONST ENUMS from hap-nodejs
 * These get converted to their string value at compile time
 * and can be safely used directly.
 */
export { Access, AccessControlEvent, AccessLevel, AccessoryEventTypes, AdaptiveLightingControllerEvents, AdaptiveLightingControllerMode, AudioBitrate, AudioCodecTypes, AudioRecordingCodecType, AudioRecordingSamplerate, AudioSamplerate, AudioStreamingCodecType, AudioStreamingSamplerate, ButtonState, ButtonType, CameraControllerEvents, Categories, ChangeReason, CharacteristicEventTypes, DataFormatTags, DataStreamConnectionEvent, DataStreamServerEvent, DataStreamStatus, DefaultControllerType, EventTriggerOption, Formats, H264Level, H264Profile, HAPServerEventTypes, HAPStatus, HDSProtocolSpecificErrorReason, HDSStatus, MediaContainerType, PacketDataType, Perms, Protocols, RemoteControllerEvents, ResourceRequestReason, SRTPCryptoSuites, ServiceEventTypes, SiriAudioSessionEvents, StreamRequestTypes, TargetCategory, TargetUpdates, Topics, Units, } from "hap-nodejs";
/**
 * Export HAP-NodeJS namespaces as type only
 */
export type { DataStreamParser, } from "hap-nodejs";
/**
 * Export HAP-NodeJS classes as type only
 */
export type { AccessControlManagement, AdaptiveLightingController, CameraController, Characteristic, ColorUtils, DataStreamConnection, DataStreamManagement, DataStreamReader, DataStreamServer, DataStreamWriter, DoorbellController, HAPServer, HAPStorage, HapStatusError, HomeKitRemoteController, HDSProtocolError, LegacyCameraSourceAdapter, RecordingManagement, RemoteController, RTPStreamManagement, Service, SiriAudioSession, StreamController, } from "hap-nodejs";
/**
 * Export HAP-NodeJS interfaces as type only
 */
export type { ActiveAdaptiveLightingTransition, AdaptiveLightingOptions, AdaptiveLightingTransitionCurveEntry, BrightnessAdjustmentMultiplierRange, CameraControllerOptions, CameraRecordingConfiguration, CameraRecordingDelegate, CameraStreamingDelegate, CharacteristicOperationContext, CharacteristicProps, Controller, ControllerConstructor, ControllerContext, ControllerServiceMap, DataStreamProtocolHandler, DoorbellOptions, H264CodecParameters, LegacyCameraSource, MediaContainerConfiguration, ProxiedSourceResponse, PublishInfo, RecordingManagementState, RecordingPacket, RTPProxyOptions, RTPStreamManagementState, SelectedH264CodecParameters, SerializableController, ServiceConfigurationChange, SiriAudioStreamProducer, SiriAudioStreamProducerConstructor, SourceResponse, VideoRecordingOptions, } from "hap-nodejs";
/**
 * Export HAP-NodeJS type aliases as type only
 */
export type { AccessoriesCallback, AccessoryCharacteristicChange, AddPairingCallback, AdditionalAuthorizationHandler, Address, AudioCodec, AudioCodecConfiguration, AudioCodecParameters, AudioFrame, AudioInfo, AudioRecordingCodec, AudioRecordingOptions, AudioStreamingCodec, AudioStreamingOptions, ButtonConfiguration, Camera, CameraRecordingOptions, CameraStreamingOptions, CharacteristicChange, CharacteristicGetCallback, CharacteristicGetHandler, CharacteristicSetCallback, CharacteristicSetHandler, CharacteristicValue, ConstructorArgs, ControllerType, DataSendCloseReason, ErrorHandler, EventHandler, FrameHandler, GlobalEventHandler, GlobalRequestHandler, HAPHttpError, HAPPincode, IPAddress, IPv4Address, IPv6Address, IdentificationCallback, IdentifyCallback, InterfaceName, ListPairingsCallback, MacAddress, NodeCallback, Nullable, PairCallback, PairingsCallback, PartialAllowingNull, PrepareStreamCallback, PrepareStreamRequest, PrepareStreamResponse, PreparedDataStreamSession, PreparedStreamRequestCallback, PreparedStreamResponse, PrimitiveTypes, RTPTime, ReadCharacteristicsCallback, ReconfigureStreamRequest, ReconfiguredVideoInfo, RemovePairingCallback, RequestHandler, Resolution, ResourceRequestCallback, ResponseHandler, SerializedServiceMap, ServiceCharacteristicChange, ServiceId, SessionIdentifier, SnapshotRequest, SnapshotRequestCallback, Source, StartStreamRequest, StateChangeDelegate, StopStreamRequest, StreamAudioParams, StreamControllerOptions, StreamRequest, StreamRequestCallback, StreamSessionIdentifier, StreamVideoParams, StreamingRequest, SupportedButtonConfiguration, SupportedConfiguration, TLVEncodable, TargetConfiguration, VideoCodec, VideoInfo, VideoStreamingOptions, VoidCallback, WithUUID, WriteCharacteristicsCallback, } from "hap-nodejs";
/**
 * Export HAP-NodeJS variables as type only
 */
export type { Codes, LegacyTypes, Status, uuid, } from "hap-nodejs";
/**
 * Export HAP-NodeJS functions as type only
 */
export type { clone, decode, decodeList, decodeWithLists, encode, epochMillisFromMillisSince2001_01_01, epochMillisFromMillisSince2001_01_01Buffer, once, } from "hap-nodejs";
//# sourceMappingURL=index.d.ts.map